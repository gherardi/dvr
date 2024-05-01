type ErrorMessageProps = {
	children: React.ReactNode;
};

export default function ErrorMessage({ children }: ErrorMessageProps) {
	return (
		<div className='h-4 mt-0.5 text-xs font-medium text-red-500'>
			{children}
		</div>
	);
}
