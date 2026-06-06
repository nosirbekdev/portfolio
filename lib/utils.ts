import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/** Full calendar years elapsed since the given year (auto-increments each year). */
export function getYearsSince(startYear: number) {
	return Math.max(0, new Date().getFullYear() - startYear);
}

export function getReadingTime(content: string) {
	const WPS = 250 / 60;

	let images = 0;
	const regex = /\w/;

	let words = content.split(' ').filter(word => {
		if (word.includes('<img')) {
			images += 1;
		}
		return regex.test(word);
	}).length;

	let imageAdjust = images * 4;
	let imageSecs = 0;
	let imageFactor = 12;

	while (images) {
		imageSecs += imageFactor;
		if (imageFactor > 3) {
			imageFactor -= 1;
		}
		images -= 1;
	}

	const minutes = Math.max(1, Math.ceil((Math.max(0, words - imageAdjust) / WPS + imageSecs) / 60));

	return String(minutes).padStart(2, '0');
}
