const Logo = (props: any) => (
	<svg
		xmlns='http://www.w3.org/2000/svg'
		width='40'
		height='40'
		viewBox='0 0 24 24'
		fill='none'
		stroke='currentColor'
		strokeWidth='2'
		strokeLinecap='round'
		strokeLinejoin='round'
		className={`lucide lucide-code2 ${props.className}`}
	>
		<path d='m18 16 4-4-4-4'></path>
		<path d='m6 8-4 4 4 4'></path>
		<path d='m14.5 4-5 16'></path>
	</svg>
);

export default Logo;
