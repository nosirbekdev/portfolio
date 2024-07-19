import { getProjects } from '@/service/project';
import { Metadata } from 'next';
import { CardProject } from '../_components/card';

export const metadata: Metadata = {
	title: 'All projects',
};

const ProjectPage = async () => {
	const projects = await getProjects();
	return (
		<div>
			<CardProject projects={projects} />
		</div>
	);
};

export default ProjectPage;
