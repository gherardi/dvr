import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Label from './ui/Label';
import Input from './ui/Input';

import { formSchema, FormValues } from '../utils/types';
import ErrorMessage from './ui/ErrorMessage';

type FormProps = {
	onSubmit: (data: FormValues) => void;
	done: boolean;
	result: number | undefined;
};

export default function Form({ onSubmit, done, result }: FormProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm<FormValues>({
		resolver: zodResolver(formSchema),
	});

	const handlePrint = (e: React.MouseEvent<HTMLElement>) => {
		if (done) {
			e.preventDefault();
			window.print();
		}
	};

	const isDisabled = isSubmitting;

	return (
		<>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='grid gap-y-6 gap-x-8 grid-cols-2 [&>*]:mt-auto'>
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

					<div className='grid grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='costante_peso'>Costante di peso</Label>
							<select
								{...register('costante_peso')}
								id='costante_peso'
								disabled={isDisabled}
							>
								<option value='0'>Uomo</option>
								<option value='1'>Donna</option>
							</select>
							<ErrorMessage>{errors.costante_peso?.message}</ErrorMessage>
						</div>
						<div>
							<Label htmlFor='age'>Età</Label>
							<select {...register('eta')} id='eta' disabled={isDisabled}>
								<option value='0'>18+ anni</option>
								<option value='1'>15 - 18 anni</option>
							</select>
							<ErrorMessage>{errors.eta?.message}</ErrorMessage>
						</div>
					</div>

					<div>
						<Label htmlFor='altezza_mani_terra'>
							Altezza delle mani da terra all'inizio del sollevamento (cm)
						</Label>
						<select
							{...register('altezza_mani_terra')}
							id='altezza_mani_terra'
							disabled={isDisabled}
						>
							<option value=''>Seleziona...</option>
							<option value='0'>0</option>
							<option value='1'>25</option>
							<option value='2'>50</option>
							<option value='3'>75</option>
							<option value='4'>100</option>
							<option value='5'>125</option>
							<option value='6'>150</option>
							<option value='7'>+175</option>
						</select>
						<ErrorMessage>{errors.altezza_mani_terra?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='distanza_verticale_peso'>
							Distanza verticale di spostamento del peso da inizio a fine
							sollevamento (cm)
						</Label>
						<select
							{...register('distanza_verticale_peso')}
							id='distanza_verticale_peso'
							disabled={isDisabled}
						>
							<option value=''>Seleziona...</option>
							<option value='0'>25</option>
							<option value='1'>30</option>
							<option value='2'>40</option>
							<option value='3'>50</option>
							<option value='4'>70</option>
							<option value='5'>100</option>
							<option value='6'>170</option>
							<option value='7'>+175</option>
						</select>
						<ErrorMessage>
							{errors.distanza_verticale_peso?.message}
						</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='distanza_orizzontale_mani'>
							Distanza orizzontale tra le mani ed il punto di mezzo delle
							caviglie (cm)
						</Label>
						<select
							{...register('distanza_orizzontale_mani')}
							id='distanza_orizzontale_mani'
							disabled={isDisabled}
						>
							<option value=''>Seleziona...</option>
							<option value='0'>25</option>
							<option value='1'>30</option>
							<option value='2'>40</option>
							<option value='3'>50</option>
							<option value='4'>55</option>
							<option value='5'>60</option>
							<option value='6'>+63</option>
						</select>
						<ErrorMessage>
							{errors.distanza_orizzontale_mani?.message}
						</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='dislocazione_angolare'>
							Dislocazione angolare del peso (in gradi)
						</Label>
						<select
							{...register('dislocazione_angolare')}
							id='dislocazione_angolare'
							disabled={isDisabled}
						>
							<option value=''>Seleziona...</option>
							<option value='0'>0</option>
							<option value='1'>30</option>
							<option value='2'>60</option>
							<option value='3'>90</option>
							<option value='4'>120</option>
							<option value='5'>135</option>
							<option value='6'>+135</option>
						</select>
						<ErrorMessage>{errors.dislocazione_angolare?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='giudizio_presa_carico'>
							Giudizio sulla presa di carico
						</Label>
						<select
							{...register('giudizio_presa_carico')}
							id='giudizio_presa_carico'
							disabled={isDisabled}
						>
							<option value='0'>Buono</option>
							<option value='1'>Scarso</option>
						</select>
						<ErrorMessage>{errors.giudizio_presa_carico?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='frequenza_gesti'>
							Frequenza dei gesti (N. atti al minuto)
						</Label>
						<select
							{...register('frequenza_gesti')}
							id='frequenza_gesti'
							disabled={isDisabled}
						>
							<option value=''>Seleziona...</option>
							<option value='0'>0.20</option>
							<option value='1'>1</option>
							<option value='2'>4</option>
							<option value='3'>6</option>
							<option value='4'>9</option>
							<option value='5'>12</option>
							<option value='6'>+15</option>
						</select>
						<ErrorMessage>{errors.frequenza_gesti?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='frequenza'>Frequenza</Label>
						<select
							{...register('frequenza')}
							id='frequenza'
							disabled={isDisabled}
						>
							<option value='0'>CONTINUO ( 1ora )</option>
							<option value='1'>CONTINUO ( 1-2 ore)</option>
							<option value='2'>CONTINUO ( 2-8 ore)</option>
						</select>
						<ErrorMessage>{errors.frequenza?.message}</ErrorMessage>
					</div>

					<div>
						<Label htmlFor='peso_sollevato'>
							Peso effettivamente sollevato (in kg)
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

				<div className='mt-6 flex justify-between'>
					<div className='space-x-4'>
						<button
							type='submit'
							className='print:hidden rounded-md bg-accent py-1.5 px-5 text-sm font-medium leading-6 text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
							disabled={isSubmitting}
						>
							{isSubmitting ? 'Caricamento...' : 'Calcola rischio'}
						</button>
						{done ? (
							<button
								type='button'
								className='print:hidden rounded-md bg-accent py-1.5 px-5 text-sm font-medium leading-6 text-background shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent'
								disabled={isSubmitting}
								onClick={handlePrint}
							>
								Stampa
							</button>
						) : null}
					</div>
					{done ? <p className='font-medium'>Risultato: {result}</p> : null}
				</div>
			</form>
		</>
	);
}
