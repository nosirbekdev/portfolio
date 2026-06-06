import { Badge } from '@/components/ui/badge';
import { getReadingTime } from '@/lib/utils';
import { getProjectDetail, getProjects } from '@/service/project';
import { format } from 'date-fns';
import parse, { domToReact } from 'html-react-parser';
import { ArrowUpRight, CalendarDays, Clock, Minus } from 'lucide-react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import ShareBtns from '../../_components/share-btns';

export const revalidate = 3600;

export async function generateStaticParams() {
	const projects = await getProjects();
	return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const blog = await getProjectDetail(params.slug);

	if (!blog) return { title: 'Project not found' };

	return {
		title: blog.title,
		description: blog.expect,
		openGraph: {
			title: blog.title,
			description: blog.expect,
			images: [{ url: blog.image.url }],
		},
	};
}

async function SlugPage({ params }: { params: { slug: string } }) {
	const blog = await getProjectDetail(params.slug);

	if (!blog) notFound();

	return (
		<div className='pt-[15vh] max-w-5xl mx-auto'>
			<h1 className='lg:text-6xl md:text-5xl text-4xl font-creteRound'>{blog.title}</h1>

			<div className='flex items-center flex-wrap max-md:justify-center gap-4 mt-4 font-workSans'>
				<div className='flex items-center gap-2'>
					<Image
						src={blog.author.avatar.url}
						alt={blog.author.name}
						width={30}
						height={30}
						className='object-cover rounded-sm'
					/>
					<p>by {blog.author.name}</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<Clock className='w-5 h-5' />
					<p>{getReadingTime(blog.description.html)} min read</p>
				</div>
				<Minus />
				<div className='flex items-center gap-2'>
					<CalendarDays className='w-5 h-5' />
					<p>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</p>
				</div>
			</div>

			<Image
				src={blog.image.url}
				alt={blog.title}
				width={1120}
				height={595}
				priority
				sizes='(max-width: 1024px) 100vw, 1120px'
				className='mt-4 rounded-md'
			/>

			<div className='flex md:gap-12 max-md:flex-col-reverse mt-12 relative'>
				<div className='flex flex-col space-y-3'>
					<div className='sticky top-36'>
						<p className='text-lg uppercase text-muted-foreground'>Share</p>
						<ShareBtns />
					</div>
				</div>
				<div className='flex-1 prose dark:prose-invert space-y-3'>
					<div className=''>
						<p className='text-lg uppercase text-muted-foreground'>Umumiy ko'rish</p>
						<p>{blog.expect}</p>
					</div>

					<div className='flex md:space-x-2 md:items-center flex-col md:flex-row'>
						<p className='text-lg uppercase text-muted-foreground'> 🌐 Github:</p>
						<Link href={blog.githubUrl} className='underline text-blue-300 text-sm'>
							{blog.githubUrl}
						</Link>
					</div>

					<div className='flex md:space-x-2 md:items-center flex-col md:flex-row'>
						<p className='text-lg uppercase text-muted-foreground'> 🌟 Demo:</p>
						<Link href={blog.url} className='underline text-blue-300 text-sm'>
							{blog.url}
						</Link>
					</div>

					<div className=''>
						<p className='text-lg uppercase text-muted-foreground'>Haqida</p>
						{parse(blog.description.html, {
							replace: ({ name, children }: any) => {
								if (name === 'p') {
									return <p className='mx-1 text-base mb-2 mt-5'>{domToReact(children)}</p>;
								}
								return children;
							},
						})}
					</div>

					<div className='pt-10'>
						<p className='text-lg uppercase text-muted-foreground'>Texnologiyalar</p>
						{parse(blog.badge.html, {
							replace: ({ name, children }: any) => {
								if (name === 'p') {
									return <Badge className='mx-1 text-sm mb-2'>{domToReact(children)}</Badge>;
								}
								return children;
							},
						})}
					</div>

					<div className='pt-6'>
						<p className='text-lg uppercase text-muted-foreground'>Tags</p>
						{parse(blog.tags.html, {
							replace: ({ name, children }: any) => {
								if (name === 'p') {
									return (
										<Badge className='mx-1 text-sm mb-2' variant={'secondary'}>
											#{domToReact(children)}
										</Badge>
									);
								}
								return children;
							},
						})}
					</div>
				</div>
			</div>

			<div className='flex mt-6 gap-6 items-center max-md:flex-col'>
				<Image
					src={blog.author.avatar.url}
					alt={blog.author.name}
					width={155}
					height={155}
					className='rounded-md max-md:self-start'
				/>
				<div className='flex-1 flex flex-col space-y-4'>
					<h2 className='text-3xl font-creteRound'>{blog.author.name}</h2>
					<p className='line-clamp-2 text-muted-foreground'>{blog.author.about}</p>
					<Link
						href={`/author`}
						className='flex items-center gap-2 hover:text-blue-500 underline transition-colors'
					>
						<span>Hammasini ko'rish</span>
						<ArrowUpRight />
					</Link>
				</div>
			</div>
		</div>
	);
}

export default SlugPage;
