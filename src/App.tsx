import Form from './components/Form.tsx';
import { FormValues } from './utils/types';

export default function App() {
	const onSubmit = (data: FormValues) => console.log(data);

	return (
		<>
			<div className='max-w-4xl px-4 mx-auto'>
				<header className='flex justify-between py-10'>
					<h4 className='text-xl font-semibold'>
						Documento valutazione rischi
					</h4>
				</header>
				<main className='space-y-4'>
					<Form onSubmit={onSubmit} />
				</main>
			</div>
		</>
	);
}
