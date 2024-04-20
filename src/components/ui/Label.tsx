import React from 'react';

interface LabelProps {
	htmlFor: string;
	children: React.ReactNode;
}

export default function Label({ htmlFor, children }: LabelProps) {
	return (
		<label
			htmlFor={htmlFor}
			className='block text-sm font-medium leading-6'
		>
			{children}
		</label>
	);
}
