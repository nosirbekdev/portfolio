'use client';

import { Button } from '@/components/ui/button';
import Telegram from '@/public/telegram';
import { Facebook, Instagram, Link2, Linkedin, Send, Twitter } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { toast } from 'sonner';

function ShareBtns({ slug }: any) {
	const pathname = usePathname();

	const onCopy = () => {
		const link = `${process.env.NEXT_PUBLIC_BASE_URL}${pathname}`;
		navigator.clipboard.writeText(link).then(() => toast.success('Copied to clipboard'));
	};

	return (
		<div className='flex flex-col max-md:flex-row md:space-y-3 max-md:space-x-3 mt-4'>
			<Button size={'icon'} variant={'outline'}>
				<Link href={'https://x.com/nosirbek030381'} target='_blank'>
					<Twitter />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'}>
				<Link href={'https://www.facebook.com/nosirbek030381'} target='_blank'>
					<Facebook />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'}>
				<Link href={'https://www.instagram.com/nosirbek.dev'} target='_blank'>
					<Instagram />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'}>
				<Link href={'https://t.me/nosirbek_dev'} target='_blank'>
					<Telegram />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'}>
				<Link href={'https://www.linkedin.com/in/nosirbek030381'} target='_blank'>
					<Linkedin />
				</Link>
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<Send />
			</Button>
			<Button size={'icon'} variant={'outline'} onClick={onCopy}>
				<Link2 />
			</Button>
		</div>
	);
}

export default ShareBtns;
