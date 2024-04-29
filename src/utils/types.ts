import { z } from 'zod';

export const formSchema = z.object({
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

export type FormValues = z.infer<typeof formSchema>;
