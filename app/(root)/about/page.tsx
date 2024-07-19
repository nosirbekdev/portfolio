import { AboutService } from '@/service/about';
import { Metadata } from 'next';
import { AboutPageComponent } from '../_components/about-page';

export const metadata: Metadata = {
	title: 'About',
	description: 'About how I got into programming.',
};

async function AboutPage() {
	const cards = await AboutService.getAllAboutBlog();

	return (
		<>
			<AboutPageComponent cards={cards} />
		</>
	);
}

export default AboutPage;
