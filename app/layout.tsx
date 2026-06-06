import { ThemeProvider } from '@/components/providers/theme-provider';
import { ChildProps } from '@/types';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import type { Metadata } from 'next';

import { Crete_Round, Fira_Code, Inter, Work_Sans } from 'next/font/google';
import { Toaster } from 'sonner';
import './globals.css';
import Providers from './progress';

const creteRound = Crete_Round({
	weight: ['400'],
	subsets: ['latin'],
	variable: '--font-creteRound',
});
const workSans = Work_Sans({
	weight: ['500', '600'],
	subsets: ['latin'],
	variable: '--font-workSans',
});
const inter = Inter({
	weight: ['500', '600', '700'],
	subsets: ['latin'],
	variable: '--font-inter',
});
const firaCode = Fira_Code({
	weight: ['400', '500'],
	subsets: ['latin'],
	variable: '--font-firacode',
});

export const metadata: Metadata = {
	metadataBase: new URL('https://nosirbek-portfolio.vercel.app'),
	title: {
		template: '%s | Portfolio',
		default: "Nosirbek's Portfolio",
	},
	description: 'Nosirbek Ismoilov`s portfolio website. Make your dream come true with programming.',
	authors: [{ name: 'Nosirbek Ismoilov', url: 'https://nosirbek-portfolio.vercel.app' }],
	icons: { icon: '/logo.svg' },
	keywords: [
		'Nosirbek Ismoilov',
		'React.js developer',
		'Next.js developer',
		'Software Engineer',
		'Frontend Developer',
		'FullStack developer',
		"o'zbek dasturchi",
		'portfolio',
	],
	openGraph: {
		title: "Nosirbek's Portfolio",
		description:
			'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
		type: 'website',
		url: 'https://nosirbek-portfolio.vercel.app',
		locale: 'uz_UZ',
		images: [{ url: '/image.png', width: 1200, height: 630, alt: "Nosirbek's Portfolio" }],
		countryName: 'Uzbekistan',
		siteName: 'Portfolio website',
		emails: 'nosirbekdev@gmail.com',
	},
	twitter: {
		card: 'summary_large_image',
		title: "Nosirbek's Portfolio",
		description:
			'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
		images: ['/image.png'],
	},
};

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} ${firaCode.variable} ${inter.className} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Providers>{children}</Providers>
					<Analytics />
					<SpeedInsights />
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
