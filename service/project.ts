import { IProject } from '@/interfaces/projects';
import request, { gql } from 'graphql-request';
import { cache } from 'react';

const graphqlAPI = process.env.NEXT_PUBLIC_HYPOGRAPH_ENDPOINT!;

export const getProjects = async () => {
	const query = gql`
		query MyQuery {
			blogs {
				category {
					label
				}
				badge {
					html
				}
				image {
					url
				}
				title
				slug
				tags {
					html
				}
				url
				expect
				githubUrl
				description {
					html
				}
				author {
					avatar {
						url
					}
					id
					about
					name
				}
			}
		}
	`;
	const { blogs } = await request<{ blogs: IProject[] }>(graphqlAPI, query);
	return blogs;
};

export const getProjectDetail = cache(async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			blog(where: { slug: $slug }) {
				author {
					id
					name
					about
					avatar {
						url
					}
				}
				badge {
					html
				}
				category {
					id
					label
				}
				createdAt
				description {
					html
				}
				id
				title
				expect
				githubUrl
				url
				slug
				tags {
					html
				}
				image {
					url
				}
			}
		}
	`;

	const { blog } = await request<{ blog: IProject }>(graphqlAPI, query, { slug });
	return blog;
});
