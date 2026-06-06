'use client';

import { Button } from '@/components/ui/button';
import Telegram from '@/public/telegram';
import { Facebook, Instagram, Link2, Linkedin, Send, Twitter } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

function ShareBtns() {
	const pathname = usePathname();

	const onCopy = () => {
		const baseUrl =
			process.env.NEXT_PUBLIC_BASE_URL ??
			(typeof window !== 'undefined' ? window.location.origin : '');
		const link = `${baseUrl}${pathname}`;
		navigator.clipboard.writeText(link).then(() => toast.success('Copied to clipboard'));
	};

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			<Button asChild size={'icon'} variant={'outline'} aria-label='Twitter (X)'>
				<Link href={'https://x.com/nosirbekdev'} target='_blank' rel='noopener noreferrer'>
					<Twitter />
				</Link>
			</Button>
			<Button asChild size={'icon'} variant={'outline'} aria-label='Facebook'>
				<Link
					href={'https://www.facebook.com/nosirbek.dev'}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Facebook />
				</Link>
			</Button>
			<Button asChild size={'icon'} variant={'outline'} aria-label='Instagram'>
				<Link
					href={'https://www.instagram.com/nosirbek.dev'}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Instagram />
				</Link>
			</Button>
			<Button asChild size={'icon'} variant={'outline'} aria-label='Telegram'>
				<Link href={'https://t.me/nosirbek_dev'} target='_blank' rel='noopener noreferrer'>
					<Telegram />
				</Link>
			</Button>
			<Button asChild size={'icon'} variant={'outline'} aria-label='LinkedIn'>
				<Link
					href={'https://www.linkedin.com/in/nosirbekdev'}
					target='_blank'
					rel='noopener noreferrer'
				>
					<Linkedin />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy} aria-label='Share link'>
				<Send />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy} aria-label='Copy link'>
				<Link2 />
			</Button>
		</div>
	);
}

export default ShareBtns;
