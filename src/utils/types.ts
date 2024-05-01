import { z } from 'zod';

const validNumber = z.string().refine((v) => !isNaN(parseFloat(v)), {
	message: 'Inserire un numero valido',
});

export const formSchema = z.object({
	ragione_sociale: z.string().min(1, { message: 'Campo obbligatorio' }),
	costante_peso: z.enum(['UOMO', 'DONNA'], { message: 'Campo obbligatorio' }),
	altezza_mani_terra: validNumber,
	distanza_verticale_peso: validNumber,
	distanza_orizzontale_mani: validNumber,
	dislocazione_angolare: validNumber,
	giudizio_presa_carico: z.enum(['buono', 'scarso'], {
		message: 'Campo obbligatorio',
	}),
	frequenza_gesti: validNumber,
	frequenza: z.enum(['1', '2', '3'], { message: 'Campo obbligatorio' }),
	peso_sollevato: validNumber,
});

export type FormValues = z.infer<typeof formSchema>;
