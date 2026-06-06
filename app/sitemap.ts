import { getProjects } from '@/service/project';
import { MetadataRoute } from 'next';

const baseUrl = 'https://nosirbek-portfolio.vercel.app';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const staticRoutes = ['', '/about', '/projects', '/contact', '/author'].map(route => ({
		url: `${baseUrl}${route}`,
		lastModified: new Date(),
	}));

	let projectRoutes: MetadataRoute.Sitemap = [];
	try {
		const projects = await getProjects();
		projectRoutes = projects.map(project => ({
			url: `${baseUrl}/projects/${project.slug}`,
			lastModified: new Date(),
		}));
	} catch {
		// If the CMS is unreachable at build time, still emit the static routes.
	}

	return [...staticRoutes, ...projectRoutes];
}
