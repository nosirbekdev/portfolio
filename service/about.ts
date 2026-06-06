import { gqlRequest } from '@/lib/graphql';
import { AboutType } from '@/interfaces/about';
import { gql } from 'graphql-request';

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
					certificate {
						url
					}
					stoped
					url
				}
			}
		`;

		const result = await gqlRequest<{ abouts: AboutType[] }>(query);
		return result.abouts;
	},
};
