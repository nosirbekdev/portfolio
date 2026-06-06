import { Contact2, FileCode2, Home, ListCollapse } from 'lucide-react';

export const navLinks = [
	{ name: 'Bosh sahifa', route: '/', icon: Home },
	{ name: 'Men haqimda', route: '/about', icon: ListCollapse },
	{ name: 'Loyihalar', route: '/projects', icon: FileCode2 },
	{ name: "Bog'lanish", route: '/contact', icon: Contact2 },
];

export const popularCategories = [
	{ name: 'Front End', slug: 'front-end' },
	{ name: 'Back End', slug: 'back-end' },
	{ name: 'Full Stack', slug: 'full-stack' },
	{ name: "Sun'iy Intelekt", slug: 'artificial-intelligence' },
];

// Year Nosirbek started as a developer — used to auto-calculate years of experience.
export const CAREER_START_YEAR = 2023;

export const popularTags = [
	{ name: 'ReactJS', slug: 'react-js' },
	{ name: 'JavaScript', slug: 'java-script' },
	{ name: 'NodeJS', slug: 'node-js' },
	{ name: 'NextJS', slug: 'next-js' },
];
