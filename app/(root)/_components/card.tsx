'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Meteors } from '@/components/ui/meteors';
import { IProject } from '@/interfaces/projects';
import { motion } from 'framer-motion';
import parse, { domToReact } from 'html-react-parser';
import { Tag } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectsPageComponent {
	projects: IProject[];
}

export function CardProject({ projects }: ProjectsPageComponent) {
	return (
		<div className='container mx-auto p-4 mt-[20vh] mb-4'>
			<h1 className='text-shadow-md text-5xl font-semibold uppercase text-slate-300 dark:text-slate-200 sm:text-6xl md:text-7xl lg:text-8xl mb-10'>
				Proyektlar
			</h1>
			<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 font-workSans'>
				{projects.map((project, index) => (
					<motion.div
						key={project.slug}
						className='relative docs-creator'
						initial={{ opacity: 0, y: index % 2 === 0 ? -100 : 100 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: index * 0.2 }}
					>
						<div className='absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl' />
						<div className='relative docs-creator shadow-xl bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start'>
							<h1 className='font-bold text-xl text-gray-900 dark:text-white mb-4 relative docs-creator z-10'>
								{project.title}
							</h1>

							<p className='font-normal text-base text-gray-700 dark:text-slate-500 mb-4 relative docs-creator z-10 line-clamp-4'>
								{project.expect}
							</p>

							<Image
								src={project.image.url}
								alt={project.title}
								width={600}
								height={600}
								className='mb-4'
							/>

							<div className='pt-3'>
								<p className='text-lg uppercase text-gray-600  dark:text-muted-foreground'>Tags</p>
								{parse(project.tags.html, {
									replace: ({ name, children }: any) => {
										if (name === 'p') {
											return (
												<Badge className='mx-1 text-sm mb-2' variant={'outline'}>
													# {domToReact(children)}
												</Badge>
											);
										}
										return children;
									},
								})}
							</div>
							<div className='pt-6'>
								<p className='text-lg uppercase text-gray-600 dark:text-muted-foreground'>
									Kategoriya
								</p>
								<Badge className='space-x-1' variant={'outline'}>
									<Tag className='w-4 h-4' />
									<span className='text-base'>{project.category?.label}</span>
								</Badge>
							</div>

							<div className='flex justify-between w-full mt-5'>
								<Button
									variant={'ghost'}
									className='border px-4 py-1 rounded-lg border-gray-300 dark:border-gray-500 text-gray-700 dark:text-gray-300 text-base'
								>
									<Link href={project.url} target='_blank'>
										Ko'rish
									</Link>
								</Button>
								<Button className='border px-4 py-1 rounded-lg border-gray-300 dark:border-gray-500 hover:bg-gray-300 dark:hover:bg-gray-300 text-base bg-gray-500  dark:bg-slate-50'>
									<Link href={`/projects/${project.slug}`}>Batafsil</Link>
								</Button>
							</div>

							<Meteors number={20} />
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
}
