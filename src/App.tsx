import { useState } from 'react';
import Form from './components/Form.tsx';
import { FormValues } from './utils/types';

export default function App() {
	const [done, setDone] = useState<boolean>(false);

	const onSubmit = (data: FormValues) => {
		setDone(true);
		console.log(data);
	};

	return (
		<>
			<div className='max-w-4xl px-4 mx-auto'>
				<header className='flex justify-between py-8 print:py-2'>
					<h4 className='text-xl font-semibold'>
						Documento valutazione rischi
					</h4>
				</header>
				<main>
					<Form onSubmit={onSubmit} done={done} />
				</main>
			</div>
		</>
	);
}
