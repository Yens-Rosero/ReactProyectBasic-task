import { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);
	const [item, setItem] = useState(initialValue);
	useEffect(() => {
		try {
			setTimeout(() => {
				const localStorageItem = localStorage.getItem(itemName);
				let parsedItem;

				if (localStorageItem) {
					parsedItem = JSON.parse(localStorageItem);
				} else {
					localStorage.setItem(itemName, JSON.stringify(initialValue));
					parsedItem = initialValue;
				}
				setItem(parsedItem);
				setLoading(false);
			}, 1000);
		} catch (error) {
			setError(error);
		}
	});

	const saveItem = (toggleItems) => {
		const stringItem = JSON.stringify(toggleItems);
		localStorage.setItem(itemName, stringItem);
		setItem(toggleItems);
	};

	return { item, saveItem, loading, error };
}

export { useLocalStorage };
