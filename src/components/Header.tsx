import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormValues } from '../interfaces';
// import { useAppContext } from '../contexts/AppContext';

import Label from './ui/Label';
import Input from './ui/Input';
import FormDialog from './ui/FormDialog';

const schema = z.object({
	ragione_sociale: z.string(),
	costante_peso: z.enum(['UOMO', 'DONNA']),
	altezza_mani_terra: z.number(),
	distanza_verticale_peso: z.number(),
	distanza_orizzontale_mani: z.number(),
	dislocazione_angolare: z.enum(['buono', 'scarso']),
	frequenza_gesti: z.number(),
	frequenza: z.enum(['1', '2', '3']),
	peso_sollevato: z.number(),
});

const Header = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	// const { setDocuments, getDocuments } = useAppContext();
	// 	const documents = getDocuments();
	// setDocuments([
	// 	...documents,
	// 	{ name: new Date().toLocaleString(), completed: false },
	// ]);

	const [isOpen, setIsOpen] = useState(true);

	const openModal = () => setIsOpen(true);
	const closeModal = () => setIsOpen(false);
	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log(data);
	};

	return (
		<>
			<header className='flex justify-between py-10'>
				<h4 className='text-xl font-bold'>Documento valutazione rischi</h4>
				<button
					type='button'
					onClick={openModal}
					className='underline text-accent'
				>
					genera documento
				</button>

				<FormDialog
					dialogTitle={'Generazione allegato al D.V.R'}
					dialogDescription='(D.Lgs. 9 Aprile 2008, n. 81, art. 28, comma 2, lett. b)'
					isOpen={isOpen}
					handleClose={closeModal}
					onSubmit={handleSubmit(onSubmit)}
				>
					<div className='space-y-1'>
						<Label htmlFor={'ragione_sociale'}>Ragione sociale</Label>
						<div>
							<Input
								reactHookFormRegister={register('ragione_sociale')}
								name='ragione_sociale'
								type='text'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'costante_peso'}>Costante di peso</Label>
						<div>
							<Input
								reactHookFormRegister={register('costante_peso')}
								name='costante_peso'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'altezza_mani_terra'}>altezza_mani_terra</Label>
						<div>
							<Input
								reactHookFormRegister={register('altezza_mani_terra')}
								name='altezza_mani_terra'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>
					<div className='space-y-1'>
						<Label htmlFor={'distanza_verticale_peso'}>
							distanza_verticale_peso
						</Label>
						<div>
							<Input
								reactHookFormRegister={register('distanza_verticale_peso')}
								name='distanza_verticale_peso'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>
					<div className='space-y-1'>
						<Label htmlFor={'distanza_orizzontale_mani'}>
							distanza_orizzontale_mani
						</Label>
						<div>
							<Input
								reactHookFormRegister={register('distanza_orizzontale_mani')}
								name='distanza_orizzontale_mani'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'dislocazione_angolare'}>
							dislocazione_angolare
						</Label>
						<div>
							<Input
								reactHookFormRegister={register('dislocazione_angolare')}
								name='dislocazione_angolare'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'frequenza_gesti'}>frequenza_gesti</Label>
						<div>
							<Input
								reactHookFormRegister={register('frequenza_gesti')}
								name='frequenza_gesti'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'frequenza'}>frequenza</Label>
						<div>
							<Input
								reactHookFormRegister={register('frequenza')}
								name='frequenza'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div className='space-y-1'>
						<Label htmlFor={'peso_sollevato'}>peso_sollevato</Label>
						<div>
							<Input
								reactHookFormRegister={register('peso_sollevato')}
								name='peso_sollevato'
								type='number'
								isPending={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<button
							type='submit'
							className='w-full rounded-md bg-indigo-600 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Caricamento...' : 'genera'}
						</button>
					</div>
				</FormDialog>
			</header>
		</>
	);
};

/*
TODO
- ragione sociale: string
- costante di peso (kg) per eta > 18: uomo/donna
- altezza delle mani da terra all'inizio del sollevamento: x cm
- distanza verticale di spostamento del peso da inizio a fine sollevamento: x cm
- distanza orizzontale tra le mani ed il punto di mezzo delle caviglie: x cm
- discolazione angolare del peso: buono/scarso
- frequenza dei gesti - numero di atti di sollevamento in relazione alla durata (vedi voce successivo): 0.2 gesti al minuto
- frequenza: continuo (<1ora) / continuo (da 1 a 2 ore) / continuo (da 2 a 8 ore)
- peso effettivamente sollevato: x kg
*/

export default Header;
