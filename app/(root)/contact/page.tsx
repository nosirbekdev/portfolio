import { Metadata } from 'next';
import ContactPageComponent from '../_components/contact';
import ContactForm from '../_components/form';

export const metadata: Metadata = {
	title: 'Contact us',
};

const ContactPage = () => {
	return (
		<section className='m-auto w-full max-w-6xl py-32 md:mt-32'>
			<div className='grid grid-cols-1 items-end gap-10 md:grid-cols-2'>
				<ContactPageComponent />
				<ContactForm />
			</div>
		</section>
	);
};

export default ContactPage;
