import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Label from './ui/Label';
import Input from './ui/Input';

import { formSchema, FormValues } from '../utils/types';
import ErrorMessage from './ui/ErrorMessage';

type FormProps = {
	onSubmit: (data: FormValues) => void;
	done: boolean;
};

export default function Form({ onSubmit, done }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	const isDisabled = isSubmitting || done

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid gap-y-6 gap-x-8 md:grid-cols-2 [&>*]:space-y-1 [&>*]:mt-auto'>
					<div>
						<Label htmlFor='ragione_sociale'>Ragione sociale</Label>
						<Input
							rhf={register('ragione_sociale')}
							id='ragione_sociale'
							type='text'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.ragione_sociale?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='costante_peso'>Costante di peso</Label>
						<select {...register('costante_peso')} id='costante_peso'>
							<option value='UOMO'>Uomo</option>
							<option value='DONNA'>Donna</option>
						</select>
						<ErrorMessage>{errors.costante_peso?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='altezza_mani_terra'>
							Altezza delle mani da terra all'inizio del sollevamento
						</Label>
						<Input
							rhf={register('altezza_mani_terra')}
							id='altezza_mani_terra'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.altezza_mani_terra?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='distanza_verticale_peso'>
							Distanza verticale di spostamento del peso da inizio a fine
							sollevamento
						</Label>
						<Input
							rhf={register('distanza_verticale_peso')}
							id='distanza_verticale_peso'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>
							{errors.distanza_verticale_peso?.message}
						</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='distanza_orizzontale_mani'>
							Distanza orizzontale tra le mani ed il punto di mezzo delle
							caviglie
						</Label>
						<Input
							rhf={register('distanza_orizzontale_mani')}
							id='distanza_orizzontale_mani'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>
							{errors.distanza_orizzontale_mani?.message}
						</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='dislocazione_angolare'>
							Dislocazione angolare del peso
						</Label>
						<Input
							rhf={register('dislocazione_angolare')}
							id='dislocazione_angolare'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.dislocazione_angolare?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='giudizio_presa_carico'>
							Giudizio sulla presa di carico
						</Label>
						<select
							{...register('giudizio_presa_carico')}
							id='giudizio_presa_carico'
						>
							<option value='buono'>Buono</option>
							<option value='scarso'>Scarso</option>
						</select>
						<ErrorMessage>{errors.giudizio_presa_carico?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='frequenza_gesti'>
							Frequenza dei gesti: Numero di atti di sollevamento in relazione
							alla durata (vedi voce successiva)
						</Label>
						<Input
							rhf={register('frequenza_gesti')}
							id='frequenza_gesti'
							name='frequenza_gesti'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.frequenza_gesti?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='frequenza'>Frequenza</Label>
						<Input
							rhf={register('frequenza')}
							id='frequenza'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.frequenza?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='peso_sollevato'>
							Peso effettivamente sollevato
						</Label>
						<Input
							rhf={register('peso_sollevato')}
							id='peso_sollevato'
							type='number'
							disabled={isDisabled}
						/>
						<ErrorMessage>{errors.peso_sollevato?.message}</ErrorMessage>
					</div>
				</div>

				<div className='mt-6'>
					<button
						type='submit'
						className='rounded-md bg-accent py-1.5 px-5 text-sm font-medium leading-6 text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
						disabled={isDisabled}
					>
						{isDisabled ? 'Caricamento...' : 'Calcola il rischio'}
					</button>
				</div>
			</form>
		</>
	);
}
