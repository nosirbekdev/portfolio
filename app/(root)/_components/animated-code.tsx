// 'use client';

// import { ReactTyped } from 'react-typed';

// const AnimatedCode = () => {
// 	const codeStrings = [`Assalomu alaykum !`];

// 	return (
// 		<div className='fixed bottom-4 right-4 bg-gray-800 p-4 rounded-lg shadow-lg text-lg text-white'>
// 			<ReactTyped
// 				strings={codeStrings}
// 				typeSpeed={40}
// 				backSpeed={20}
// 				loop
// 				showCursor={true}
// 				cursorChar={'|'}
// 				backDelay={1000}
// 			/>
// 		</div>
// 	);
// };

// export default AnimatedCode;
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ReactIconAnimation() {
	return (
		<div className='flex items-center justify-center '>
			<motion.div
				animate={{ rotate: 360 }}
				transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
				className='flex items-center justify-center'
			>
				<Image src='/react.svg' alt='React Icon' width={200} height={200} />
			</motion.div>
		</div>
	);
}
