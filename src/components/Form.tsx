import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Label from './ui/Label';
import Input from './ui/Input';

import { formSchema, FormValues } from '../utils/types';

type FormProps = {
	onSubmit: (data: FormValues) => void;
};

export default function Form({ onSubmit }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	return (
		<>
			<form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
				<div className='grid gap-y-10 gap-x-8 md:grid-cols-2 [&>*]:space-y-1 [&>*]:mt-auto'>
					<div>
						<Label htmlFor='ragione_sociale'>Ragione sociale</Label>
						<div>
							<Input
								{...register('ragione_sociale')}
								id='ragione_sociale'
								type='text'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='costante_peso'>Costante di peso</Label>
						<div>
							<select {...register('costante_peso')} id='costante_peso'>
								<option value='UOMO' selected>
									Uomo
								</option>
								<option value='DONNA'>Donna</option>
							</select>
						</div>
					</div>

					<div>
						<Label htmlFor='altezza_mani_terra'>
							Altezza delle mani da terra all'inizio del sollevamento
						</Label>
						<div>
							<Input
								{...register('altezza_mani_terra')}
								id='altezza_mani_terra'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='distanza_verticale_peso'>
							Distanza verticale di spostamento del peso da inizio a fine
							sollevamento
						</Label>
						<div>
							<Input
								{...register('distanza_verticale_peso')}
								id='distanza_verticale_peso'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='distanza_orizzontale_mani'>
							Distanza orizzontale tra le mani ed il punto di mezzo delle
							caviglie
						</Label>
						<div>
							<Input
								{...register('distanza_orizzontale_mani')}
								id='distanza_orizzontale_mani'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='dislocazione_angolare'>
							Dislocazione angolare del peso
						</Label>
						<div>
							<Input
								{...register('dislocazione_angolare')}
								id='dislocazione_angolare'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='giudizio_presa_carico'>
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
						<Label htmlFor='frequenza_gesti'>
							Frequenza dei gesti: Numero di atti di sollevamento in relazione
							alla durata (vedi voce successiva)
						</Label>
						<div>
							<Input
								{...register('frequenza_gesti')}
								id='frequenza_gesti'
								name='frequenza_gesti'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='frequenza'>Frequenza</Label>
						<div>
							<Input
								{...register('frequenza')}
								id='frequenza'
								type='number'
								disabled={isSubmitting}
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='peso_sollevato'>
							Peso effettivamente sollevato
						</Label>
						<div>
							<Input
								{...register('peso_sollevato')}
								id='peso_sollevato'
								type='number'
								disabled={isSubmitting}
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
		</>
	);
}
