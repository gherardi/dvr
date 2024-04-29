import { z } from 'zod';

export const formSchema = z.object({
	ragione_sociale: z.string().min(1, { message: 'Campo obbligatorio' }),
	costante_peso: z.enum(['UOMO', 'DONNA'], { message: 'Campo obbligatorio' }),
	altezza_mani_terra: z.preprocess(
		(a) => parseInt(z.string().parse(a), 10),
		z.number(),
		{ message: 'Campo obbligatorio' }
	),
	distanza_verticale_peso: z.string().min(1, { message: 'Campo obbligatorio' }),
	distanza_orizzontale_mani: z
		.string()
		.min(1, { message: 'Campo obbligatorio' }),
	dislocazione_angolare: z.string().min(1, { message: 'Campo obbligatorio' }), // in gradi
	giudizio_presa_carico: z.enum(['buono', 'scarso']),
	frequenza_gesti: z.string().min(1, { message: 'Campo obbligatorio' }),
	frequenza: z.enum(['1', '2', '3'], { message: 'Campo obbligatorio' }),
	peso_sollevato: z.string().min(1, { message: 'Campo obbligatorio' }),
});

export type FormValues = z.infer<typeof formSchema>;
