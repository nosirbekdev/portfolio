'use client';

import Logo from '@/components/shared/logo';
import ModeToggle from '@/components/shared/mode-toggle';
import { navLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Mobile from './mobile';

function Navbar() {
	const pathname = usePathname();

	return (
		<div className='h-[10vh] backdrop-blur-sm border-b fixed z-40 inset-0 bg-background'>
			<div className='md:px-24 px-10 mx-auto h-[10vh] w-full flex items-center justify-between'>
				{/* Logo */}
				<Link href={'/'}>
					<Logo className='text-gray-400 md:w-14 md:h-14 w-10 h-10' />
				</Link>

				{/* Search */}
				<div className='flex items-center gap-1'>
					{/* <GlobalSearch /> */}
					{/* Nav links */}
					<div className='gap-2 hidden md:flex font-workSans'>
						{navLinks.map(nav => (
							<Link
								key={nav.route}
								href={nav.route}
								className={cn(
									'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors',
									pathname === nav.route && 'text-blue-400'
								)}
							>
								{nav.name}
							</Link>
						))}
					</div>
					<ModeToggle />
					<Mobile />
				</div>
			</div>
		</div>
	);
}

export default Navbar;
