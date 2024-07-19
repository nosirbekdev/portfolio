'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

const ContactPageComponent = () => {
	return (
		<div>
			<Fade direction='down' triggerOnce={true}>
				<div className='flex flex-col justify-between'>
					<div className='mb-8'>
						<h2 className='text-5xl font-bold'>Men bilan bog'laning</h2>
						<p className='mt-5 max-w-sm text-base tracking-wider text-slate-400'>
							Formani to'ldiring va bizning jamoamiz sizga 24 soat ichida javob beraman.
						</p>
					</div>
					<div className='space-y-4'>
						<Link
							className='flex items-center gap-5 rounded-md border-2  px-5 py-4 shadow transition-all duration-200 hover:border-blue-700 hover:bg-blue-500/10'
							href='tel:+998914200386'
						>
							<Phone className='text-blue-600' size={25} />{' '}
							<span className='text-slate-400'>+998914200386</span>
						</Link>
						<Link
							className='flex items-center gap-5 rounded-md border-2 px-5 py-4 shadow hover:border-blue-700 hover:bg-blue-500/10'
							href='mailto:ni761809@gmail.com'
						>
							<Mail className='text-blue-600' size={25} />{' '}
							<span className='text-slate-400'>ni761809@gmail.com</span>
						</Link>
						<Link
							className='flex items-center gap-5 rounded-md border-2 px-5 py-4 shadow hover:border-blue-700 hover:bg-blue-500/10'
							href='https://maps.app.goo.gl/SG5u6NQgbBdB3YQ77'
							target='_blank'
						>
							<MapPin className='text-blue-600' size={25} />{' '}
							<span className='text-slate-400'>Surxondaryo Uzbekistan </span>
						</Link>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default ContactPageComponent;
