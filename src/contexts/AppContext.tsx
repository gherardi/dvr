import { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { AppContextType } from '../interfaces';

const AppContext = createContext<AppContextType | null>(null);

export interface AppProviderProps {
	children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
	const {
		setItem: setDocuments,
		getItem: getDocuments,
		removeItem: removeDocuments,
	} = useLocalStorage('documents');

	return (
		<AppContext.Provider
			value={{ setDocuments, getDocuments, removeDocuments }}
		>
			{children}
		</AppContext.Provider>
	);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = (): AppContextType => {
	const context = useContext(AppContext);

	if (context === null) {
		throw new Error('useAuth must be used within an AuthProvider');
	}

	return context;
};
