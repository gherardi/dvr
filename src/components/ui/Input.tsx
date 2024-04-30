import { UseFormRegisterReturn } from 'react-hook-form';
import { FormValues } from '../../utils/types';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
	rhf: UseFormRegisterReturn<keyof FormValues>;
};

export default function Input({ rhf, type, ...props }: InputProps) {
	return (
		<>
			<input
				{...rhf}
				type={type}
				className='w-full rounded border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6'
				{...props}
			/>
		</>
	);
}
