'use client';

import { PinContainer } from '@/components/ui/3d-pin';
import { ICards } from '@/interfaces/author';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface ICard {
	items: ICards;
}

export function AnimatedPinDemo({ items }: ICard) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className='flex items-center justify-center p-4 z-10'
		>
			<PinContainer title={items.title} href={`/projects/${items.slug}`}>
				<div className='flex flex-col p-4 text-slate-100/50 w-[20rem] h-[20rem]'>
					<h3 className='pb-2 font-bold text-base text-slate-100'>{items.title}</h3>
					<div className='text-base font-normal'>
						<span className='text-slate-500 line-clamp-3'>{items.expect}</span>
					</div>
					<div className='relative flex-1 mt-4 rounded-lg overflow-hidden'>
						<Image
							src={items.image.url}
							alt={items.title}
							fill
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
							style={{ objectFit: 'cover' }}
						/>
					</div>
				</div>
			</PinContainer>
		</motion.div>
	);
}
