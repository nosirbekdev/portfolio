import request, { type RequestDocument, type Variables } from 'graphql-request';

const endpoint = process.env.NEXT_PUBLIC_HYPOGRAPH_ENDPOINT;

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Thin wrapper around graphql-request that retries on Hygraph rate limiting (HTTP 429)
 * with exponential backoff. This keeps both build-time static generation and runtime
 * ISR resilient when many requests are fired in a short window.
 */
export async function gqlRequest<T>(
	query: RequestDocument,
	variables?: Variables,
	retries = 4
): Promise<T> {
	if (!endpoint) {
		throw new Error('NEXT_PUBLIC_HYPOGRAPH_ENDPOINT is not defined');
	}

	let lastError: unknown;

	for (let attempt = 0; attempt <= retries; attempt++) {
		try {
			return variables
				? await request<T>(endpoint, query, variables)
				: await request<T>(endpoint, query);
		} catch (error) {
			lastError = error;
			const status = (error as { response?: { status?: number } })?.response?.status;

			if (status === 429 && attempt < retries) {
				// 0.5s, 1s, 2s, 4s
				await sleep(500 * 2 ** attempt);
				continue;
			}

			throw error;
		}
	}

	throw lastError;
}
