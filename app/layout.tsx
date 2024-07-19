import { ThemeProvider } from '@/components/providers/theme-provider';
import { ChildProps } from '@/types';
import type { Metadata } from 'next';

import { Crete_Round, Inter, Work_Sans } from 'next/font/google';
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

export const metadata: Metadata = {
	metadataBase: new URL('https://nosirbek-portfolio.vercel.app'),
	title: {
		template: '%s | Portfolio',
		default: "Nosirbek's Portfolio",
	},
	description: 'Nosirbek Ismoilov`s portfolio website. Make your dream come true with programming.',
	authors: [{ name: 'Nosirbek Ismoilov', url: 'https://nosirbek-portfolio.vercel.app' }],
	icons: { icon: '/logo.svg' },
	keywords:
		'Nosirbek Ismoilov, React.js developer, Software Engineer, Frontend Developer,    asqarbek,    olimov,    asqardev,    mrcoderx,    top developer,    portfolio,    asqarbek portfolio,    portfolio website,    Nextjs,    o`zbek dasturchi,    I am Nosirbek Ismoilov, a 21-year-old Software Engineer from Surkhandaryo, Uzbekistan.',
	openGraph: {
		title: 'Nosirbek`s Portfolio',
		description:
			'Any fool can write code that a computer can understand. Good programmers write code that humans can understand',
		type: 'website',
		url: 'https://nosirbek-portfolio.vercel.app',
		locale: 'uz_UZ',
		images: '/logo.svg',
		countryName: 'Uzbekistan',
		siteName: 'Portfolio website',
		emails: 'ni761809@gamil.com',
	},
};

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={`${creteRound.variable} ${workSans.variable} ${inter.className} overflow-x-hidden`}
			>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<Providers>{children}</Providers>
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}

export default RootLayout;
