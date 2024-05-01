import { z } from 'zod';

const validNumber = z
	.string()
	.refine((v) => !isNaN(parseFloat(v)) && parseFloat(v) >= 0, {
		message: 'Inserire un numero valido',
	});

export const formSchema = z.object({
	ragione_sociale: z.string().min(1, { message: 'Campo obbligatorio' }),
	costante_peso: z.enum(['0', '1'], { message: 'Campo obbligatorio' }),
	eta: z.enum(['0', '1'], { message: 'Campo obbligatorio' }),
	altezza_mani_terra: z.enum(['0', '1', '2', '3', '4', '5', '6', '7'], {
		message: 'Campo obbligatorio',
	}),
	distanza_verticale_peso: validNumber,
	distanza_orizzontale_mani: validNumber,
	dislocazione_angolare: validNumber,
	giudizio_presa_carico: z.enum(['0', '1'], {
		message: 'Campo obbligatorio',
	}),
	frequenza_gesti: validNumber,
	frequenza: z.enum(['0', '1', '2'], {
		message: 'Campo obbligatorio',
	}),
	peso_sollevato: validNumber,
});

export type FormValues = z.infer<typeof formSchema>;
