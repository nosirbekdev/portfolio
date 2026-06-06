import { FlipWords } from '@/components/ui/flip-words';

export function FlipWordsDemo() {
	const words = ['(Life is interesting with programming)', '(Hayot dasturlash bilan qiziq)'];

	return (
		<div className='flex'>
			<div className='mt-3 font-inter text-2xl font-bold text-slate-400 sm:text-5xl md:text-6xl'>
				<FlipWords words={words} /> <br />
			</div>
		</div>
	);
}
