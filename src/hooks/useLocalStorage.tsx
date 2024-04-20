import { useState } from 'react';
import { Document } from '../interfaces';

// export default function useLocalStorage(
// 	key: string,
// 	initialValue: Document[] = []
// ) {
// 	const setItem = (value: Document[]): void => {
// 		window.localStorage.setItem(key, JSON.stringify(value));
// 	};

// 	const getItem = (): Document[] => {
// 		const item = window.localStorage.getItem(key);
// 		if (!item) return initialValue;
// 		return JSON.parse(item);
// 	};

// 	const removeItem = (): void => {
// 		window.localStorage.removeItem(key);
// 	};

// 	return { setItem, getItem, removeItem };
// }

export default function useLocalStorage(
	key: string,
	initialValue: Document[] = []
) {
	const [storedValue, setStoredValue] = useState<Document[]>(() => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return initialValue;
		}
	});

	// Function to update the value in local storage and state
	const setValue = (value: Document[]) => {
		try {
			// Allow value to be a function to update based on previous state
			const valueToStore =
				value instanceof Function ? value(storedValue) : value;
			// Update state
			setStoredValue(valueToStore);
			// Update local storage
			window.localStorage.setItem(key, JSON.stringify(valueToStore));
		} catch (error) {
			console.error(error);
		}
	};

	// Function to get the item from local storage
	const getItem = () => {
		try {
			const item = window.localStorage.getItem(key);
			return item ? JSON.parse(item) : initialValue;
		} catch (error) {
			console.error(error);
			return undefined;
		}
	};

	// Function to remove the item from local storage
	const removeItem = () => {
		try {
			window.localStorage.removeItem(key);
			setStoredValue(initialValue);
		} catch (error) {
			console.error(error);
		}
	};

	// Return the functions to interact with local storage
	return { getItem, setItem: setValue, removeItem };
}
