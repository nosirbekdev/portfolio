// about-page-component.tsx
'use client';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { TracingBeam } from '@/components/ui/tracong-beam';
import { AboutType } from '@/interfaces/about';
import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';
import Image from 'next/image';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

interface AboutPageComponentProps {
	cards: AboutType[];
}

export function AboutPageComponent({ cards }: AboutPageComponentProps) {
	return (
		<TracingBeam className='px-6 md:px-0 space-x-2 md:space-x-0 md:mt-[20vh] mt-[12vh]'>
			<div className='max-w-4xl mx-auto antialiased relative'>
				{cards.map((item, index) => (
					<motion.div
						key={`content-${index}`}
						className='mb-10 mt-10'
						initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: index * 0.3 }}
					>
						<p
							className={twMerge(
								'text-shadow-md text-5xl font-semibold uppercase text-slate-300 sm:text-6xl md:text-7xl lg:text-8xl'
							)}
						>
							{item.title}
						</p>

						<div className='text-lg prose prose-sm dark:prose-invert font-workSans'>
							<div className='mb-3 text-gray-400'>{item.expect}</div>
							<div className='mb-3 text-gray-400'>
								{item.start && item.stoped && (
									<p>
										{item.start} - {item.stoped}
									</p>
								)}
							</div>
							<div className='mb-3'>
								<h3 className='text-base font-semibold font-creteRound mb-1 uppercase'>
									Ko'nikmalar:
								</h3>
								{parse(item.badge.html, {
									replace: ({ name, children }: any) => {
										if (name === 'p') {
											return <Badge className='mx-1 text-sm mb-2'>{domToReact(children)}</Badge>;
										}
										return children;
									},
								})}
							</div>
							<div className='mb-3 lg:space-x-2 space-x-1'>
								{item.certificate?.url && (
									<Button className='text-lg ' variant={'destructive'}>
										<Link
											href={`${item.certificate?.url}`}
											className='relative docs-creator'
											target='_blank'
										>
											Kurs sertifikati
										</Link>
									</Button>
								)}
								{item.url && (
									<Button
										className='text-lg border border-blue-500 mt-2 md:mt-0'
										variant={'outline'}
									>
										<Link href={`${item.url}`} className='relative docs-creator' target='_blank'>
											Kursni ko'rish
										</Link>
									</Button>
								)}
							</div>
							<div className=''>
								{item?.image && (
									<Image
										src={item.image.url}
										alt='blog thumbnail'
										height='100'
										width='400'
										className='rounded-lg mb-10 object-cover'
									/>
								)}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</TracingBeam>
	);
}
