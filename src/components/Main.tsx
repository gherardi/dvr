import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import { FormValues } from '../interfaces';
import Label from './ui/Label';
import Input from './ui/Input';

const schema = z.object({
	ragione_sociale: z.string().min(1),
	costante_peso: z.enum(['UOMO', 'DONNA']),
	altezza_mani_terra: z.preprocess(
		(a) => parseInt(z.string().parse(a), 10),
		z.number()
	),
	distanza_verticale_peso: z.string(),
	distanza_orizzontale_mani: z.string(),
	dislocazione_angolare: z.string(), // in gradi
	giudizio_presa_carico: z.enum(['buono', 'scarso']),
	frequenza_gesti: z.string(),
	frequenza: z.enum(['1', '2', '3']),
	peso_sollevato: z.string(),
});

const Main = () => {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<FormValues>({
		resolver: zodResolver(schema),
	});

	const onSubmit: SubmitHandler<FormValues> = (data) => {
		console.log('REVEICED: ', data);
	};

	console.log(errors);

	return (
		<>
			<main className='space-y-4'>
				<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
					<div className='grid gap-y-10 gap-x-8 md:grid-cols-2 [&>*]:space-y-1 [&>*]:mt-auto'>
						<div>
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

						<div>
							<Label htmlFor={'costante_peso'}>Costante di peso</Label>
							<div>
								<select {...register('costante_peso')} id='costante_peso'>
									<option value='UOMO'>Uomo</option>
									<option value='DONNA'>Donna</option>
								</select>
							</div>
						</div>

						<div>
							<Label htmlFor={'altezza_mani_terra'}>
								Altezza delle mani da terra all'inizio del sollevamento
							</Label>
							<div>
								<Input
									reactHookFormRegister={register('altezza_mani_terra')}
									name='altezza_mani_terra'
									type='number'
									isPending={isSubmitting}
								/>
							</div>
						</div>

						<div>
							<Label htmlFor={'distanza_verticale_peso'}>
								Distanza verticale di spostamento del peso da inizio a fine
								sollevamento
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

						<div>
							<Label htmlFor={'distanza_orizzontale_mani'}>
								Distanza orizzontale tra le mani ed il punto di mezzo delle
								caviglie
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

						<div>
							<Label htmlFor={'dislocazione_angolare'}>
								Dislocazione angolare del peso
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

						<div>
							<Label htmlFor={'giudizio_presa_carico'}>
								Giudizio sulla presa di carico
							</Label>
							<div>
								<select
									{...register('giudizio_presa_carico')}
									id='giudizio_presa_carico'
								>
									<option value='buono'>Buono</option>
									<option value='scarso'>Scarso</option>
								</select>
							</div>
						</div>

						<div>
							<Label htmlFor={'frequenza_gesti'}>
								Frequenza dei gesti: Numero di atti di sollevamento in relazione
								alla durata (vedi voce successiva)
							</Label>
							<div>
								<Input
									reactHookFormRegister={register('frequenza_gesti')}
									name='frequenza_gesti'
									type='number'
									isPending={isSubmitting}
								/>
							</div>
						</div>

						<div>
							<Label htmlFor={'frequenza'}>Frequenza</Label>
							<div>
								<Input
									reactHookFormRegister={register('frequenza')}
									name='frequenza'
									type='number'
									isPending={isSubmitting}
								/>
							</div>
						</div>

						<div>
							<Label htmlFor={'peso_sollevato'}>
								Peso effettivamente sollevato
							</Label>
							<div>
								<Input
									reactHookFormRegister={register('peso_sollevato')}
									name='peso_sollevato'
									type='number'
									isPending={isSubmitting}
								/>
							</div>
						</div>
					</div>

					<div className='flex justify-end'>
						<button
							type='submit'
							className='rounded-md bg-accent py-1.5 px-5 text-sm font-medium leading-6 text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Caricamento...' : 'genera'}
						</button>
					</div>
				</form>
			</main>
		</>
	);
};

export default Main;
