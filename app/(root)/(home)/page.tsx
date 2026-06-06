import HomePageComponent from '../_components/home-page';

// Regenerate daily so the auto-calculated years of experience stays current
// without needing a redeploy when the year rolls over.
export const revalidate = 86400;

const HomePage = () => {
	return <HomePageComponent />;
};

export default HomePage;
