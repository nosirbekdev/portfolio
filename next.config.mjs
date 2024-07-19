/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'us-east-1-shared-usea1-02.graphassets.com',
			},
			{
				protocol: 'https',
				hostname: 'images.unsplash.com',
			},
		],
	},

	webpack: config => {
		// Your custom Webpack configuration here
		return config;
	},
};

export default nextConfig;
