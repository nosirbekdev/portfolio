import { gqlRequest } from '@/lib/graphql';
import { IProject } from '@/interfaces/projects';
import { gql } from 'graphql-request';
import { cache } from 'react';

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
				expect
				url
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
	const { blogs } = await gqlRequest<{ blogs: IProject[] }>(query);
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

	const { blog } = await gqlRequest<{ blog: IProject | null }>(query, { slug });
	return blog;
});
