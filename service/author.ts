import { IAuthors } from '@/interfaces/author';
import request, { gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_HYPOGRAPH_ENDPOINT!;

export const getAuthor = async () => {
	const query = gql`
		query MyQuery {
			authors {
				id
				name
				about
				blog {
					githubUrl
					expect
					title
					url
					slug
					id
					image {
						url
					}
				}
				avatar {
					url
				}
			}
		}
	`;
	const { authors } = await request<{ authors: IAuthors[] }>(graphqlAPI, query);
	return authors;
};
