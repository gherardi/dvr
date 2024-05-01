import { useState } from 'react';
import Form from './components/Form.tsx';
import { FormValues } from './utils/types';

const costanti = [
	[30, 20],
	[20, 15],
];

const altezze = [0.78, 0.85, 0.93, 1.0, 0.93, 0.85, 0.78, 0.0];
const dislocazioni = [1.0, 0.97, 0.93, 0.91, 0.88, 0.87, 0.85, 0.0];
const distanze = [1.0, 0.83, 0.63, 0.5, 0.45, 0.42, 0.0];
const angoli = [1.0, 0.9, 0.81, 0.71, 0.62, 0.57, 0.0];
const prese = [1.0, 0.9];
const frequenze = [
	[1.0, 0.94, 0.84, 0.75, 0.52, 0.37, 0.0],
	[0.95, 0.88, 0.72, 0.5, 0.3, 0.21, 0.0],
	[0.85, 0.75, 0.45, 0.27, 0.15, 0.0, 0.0],
];

export default function App() {
	const [done, setDone] = useState<boolean>(false);
	const [result, setResult] = useState<number | undefined>(undefined);

	const onSubmit = (data: FormValues) => {
		const limite =
			costanti[data.eta][data.costante_peso] *

			altezze[+data.altezza_mani_terra] *
			dislocazioni[+data.distanza_verticale_peso] *
			distanze[+data.distanza_orizzontale_mani] *
			angoli[+data.dislocazione_angolare] *
			prese[+data.giudizio_presa_carico] *
			frequenze[+data.frequenza][+data.frequenza_gesti];

		const risultato = +data.peso_sollevato / limite;

		setResult(risultato);
		setDone(true);
	};

	return (
		<>
			<div className='max-w-4xl px-4 mx-auto'>
				<header className='flex justify-between py-8 print:py-4'>
					<h4 className='text-xl font-semibold'>
						Documento valutazione rischi
					</h4>
				</header>
				<main>
					<Form onSubmit={onSubmit} done={done} result={result} />
				</main>
			</div>
		</>
	);
}
