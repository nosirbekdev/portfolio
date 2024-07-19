import { AboutType } from '@/interfaces/about';
import request, { gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYPOGRAPH_ENDPOINT!;

export const AboutService = {
	async getAllAboutBlog() {
		const query = gql`
			query Abouts {
				abouts {
					badge {
						html
						markdown
					}
					id
					expect
					title
					createdAt
					image {
						url
					}
					start
					stoped
					certificate {
						url
					}
					url
				}
			}
		`;

		const result = await request<{ abouts: AboutType[] }>(graphqlAPI, query);
		return result.abouts;
	},
};
