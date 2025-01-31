'use client';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';
import { FlipWordsDemo } from './animated-tex';

export default function HomePageComponent() {
	return (
		<section className='m-auto md:mt-24 mt-16 w-full max-w-6xl pt-16 md:pt-32'>
			<Fade direction='down' triggerOnce={true}>
				<h1 className={'font-firacode text-blue-500'}>Assalomu alaykum, mening ismim</h1>
				<h2
					className={`animate-text-gradient mt-5 inline-flex bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text font-inter text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl `}
				>
					Nosirbek Ismoilov.
				</h2>
			</Fade>

			<Fade triggerOnce={true}>
				<h3 className={`mt-3 font-inter text-4xl font-bold text-slate-400 sm:text-5xl md:text-6xl`}>
					{/* I build web and mobile applications */}
					<FlipWordsDemo />
				</h3>
			</Fade>

			<Fade direction='up' triggerOnce={true}>
				<p className='my-8 max-w-2xl font-workSans text-lg font-medium leading-6 tracking-wider text-slate-400'>
					Assalomu alaykum! Men Nosirbek, hozirda Frontend dasturchisiman. Men ReactJS va NextJS
					kutubxonalari bilan ishlashda 1 yildan ortiq tajribaga egaman. Asosiy ixtisoslashuvim
					ReactJS va NextJS yordamida veb ilovalarni ishlab chiqishdir.
				</p>

				<div className='shadow-mdhover:border-transparent inline-block cursor-pointer rounded border-2 border-blue-600 px-8  py-1'>
					<Link href={'/resume.pdf'} target='_blank'>
						<Button
							variant={'default'}
							className='bg-transparent text-base text-blue-600 hover:bg-transparent'
						>
							Rezyume
						</Button>
					</Link>
				</div>
			</Fade>
		</section>
	);
}
