export interface Document {
	name: string;
	completed: boolean;
}

export interface AppContextType {
	setDocuments: (value: Document[]) => void;
	getDocuments: () => Document[];
	removeDocuments: () => void;
}

export enum WeightConstant {
	UOMO,
	DONNA,
}

export interface FormValues {
	ragione_sociale: string;
	costante_peso: WeightConstant;
	altezza_mani_terra: number;
	distanza_verticale_peso: number;
	distanza_orizzontale_mani: number;
	dislocazione_angolare: number;
	giudizio_presa_carico: 'buono' | 'scarso';
	frequenza_gesti: number;
	frequenza: 1 | 2 | 3;
	peso_sollevato: number;
}
