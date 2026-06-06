import { IAuthors } from '@/interfaces/author';
import { gqlRequest } from '@/lib/graphql';
import { gql } from 'graphql-request';

export const getAuthor = async () => {
	const query = gql`
		query MyQuery {
			authors {
				id
				name
				about
				blog {
					githubUrl
					title
					expect
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
	const { authors } = await gqlRequest<{ authors: IAuthors[] }>(query);
	return authors;
};
