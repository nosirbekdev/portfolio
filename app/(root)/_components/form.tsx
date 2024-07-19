'use client';

import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactSchema } from '@/lib/validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const ContactForm = () => {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof contactSchema>>({
		resolver: zodResolver(contactSchema),
		defaultValues: {
			message: '',
			email: '',
			name: '',
			phone: '',
			telegramUser: '', // yangi telegram user maydoni
		},
	});

	function onSubmit(values: z.infer<typeof contactSchema>) {
		setIsLoading(true);
		const tgBot = process.env.NEXT_PUBLIC_TG_BOT_API!;
		const tgChatID = process.env.NEXT_PUBLIC_TG_CHAT_ID!;

		const promise = fetch(`https://api.telegram.org/bot${tgBot}/sendMessage`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'cache-control': 'no-cache',
			},
			body: JSON.stringify({
				chat_id: tgChatID,
				text: `
          Name: ${values.name}
          Email: ${values.email}
          Phone: ${values.phone}
          Telegram User: ${values.telegramUser}
          Message: ${values.message}
        `,
			}),
		})
			.then(() => form.reset())
			.finally(() => setIsLoading(false));
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully sent',
			error: 'Something went wrong',
		});
	}

	const handleTelegramUserChange = (e: any) => {
		const value = e.target.value;
		if (!value.startsWith('@')) {
			form.setValue('telegramUser', '@' + value);
		} else {
			form.setValue('telegramUser', value);
		}
	};

	return (
		<>
			<Fade direction='up' triggerOnce={true}>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className='space-y-3'>
						<FormField
							control={form.control}
							name='email'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder='Elektron pochta' {...field} disabled={isLoading} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='name'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder='Ismingiz' {...field} disabled={isLoading} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='phone'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input placeholder='Telefon raqamingiz' {...field} disabled={isLoading} />
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='telegramUser'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Input
											placeholder='Telegram username'
											{...field}
											disabled={isLoading}
											onChange={handleTelegramUserChange}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name='message'
							render={({ field }) => (
								<FormItem>
									<FormControl>
										<Textarea
											className='h-32 resize-none'
											placeholder='Xabaringizni kiriting...'
											{...field}
											disabled={isLoading}
										/>
									</FormControl>

									<FormMessage />
								</FormItem>
							)}
						/>
						<Button className='w-fit' size={'lg'} type='submit' disabled={isLoading}>
							<span>Yuborish</span>
							<Send className='ml-2 h-4 w-4' />
						</Button>
					</form>
				</Form>
			</Fade>
		</>
	);
};

export default ContactForm;
