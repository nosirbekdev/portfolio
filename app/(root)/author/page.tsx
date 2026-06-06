import { getAuthor } from '@/service/author';
import { Metadata } from 'next';
import { AnimatedPinDemo } from '../_components/3d-pin';

export const metadata: Metadata = {
	title: 'Author Page',
};

const AuthorPage = async () => {
	const authors = await getAuthor();
	return (
		<div className='container mx-auto p-4 mt-[20vh] mb-4'>
			{authors.map(author => (
				<div key={author.id}>
					<h1 className='text-shadow-md text-5xl font-semibold uppercase text-slate-300 dark:text-slate-200 sm:text-6xl md:text-7xl lg:text-8xl mb-10 flex'>
						{author.name}
					</h1>
					<div className='flex flex-wrap flex-row w-[70%]'>
						<p className='text-gray-300'>{author.about}</p>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
						{author.blog.map(item => (
							<AnimatedPinDemo key={item.id} items={item} />
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default AuthorPage;
