import React from 'react';

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement>;

export default function Label({ children, ...props }: LabelProps) {
	return (
		<label {...props} className='block text-sm font-medium leading-6'>
			{children}
		</label>
	);
}
