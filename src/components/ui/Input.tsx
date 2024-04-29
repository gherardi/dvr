// import { UseFormRegisterReturn } from 'react-hook-form';
// import { FormValues } from '../../utils/types';

// interface InputProps {
// 	reactHookFormRegister: UseFormRegisterReturn<keyof FormValues>;
// 	type: string;
// 	name: string;
// 	isPending: boolean;
// 	placeholder?: string;
// }

// export default function Input({
// 	type,
// 	name,
// 	placeholder = '',
// 	isPending = false,
// 	reactHookFormRegister,
// }: InputProps) {
// 	return (
// 		<input
// 			{...reactHookFormRegister}
// 			id={name}
// 			name={name}
// 			placeholder={placeholder}
// 			type={type}
// 			disabled={isPending}
// 			className='w-full rounded border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6'
// 		/>
// 	);
// }

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ type, ...props }: InputProps) {
	return (
		<>
			<input
				type={type}
				className='w-full rounded border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6'
				{...props}
			/>
		</>
	);
}
