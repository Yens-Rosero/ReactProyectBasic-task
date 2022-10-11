import { createContext } from "react";
import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const todoContext = createContext();

function TodoContextProvider(props) {
	const {
		item: todos,
		saveItem: saveTodos,
		loading,
		error,
	} = useLocalStorage("tasks_v1", []);
	const [searchValue, setSearchValue] = useState("");
	const [toogleModal, setToogleModal] = useState(false);
	const completedTodos = todos.filter(todo => todo.completed).length;
	const totalTodos = todos.length;

	let searchedTodos = [];

	const togglesTodos = text => {
		const todoIndex = todos.findIndex(todo => todo.text === text);
		const newTodos = [...todos];
		if (!newTodos[todoIndex].completed) {
			newTodos[todoIndex].completed = true;
		} else {
			newTodos[todoIndex].completed = false;
		}
		saveTodos(newTodos);
	};

	const todoAdd = text => {
		const newTodos = [...todos];
		newTodos.push({ completed: false, text });
		saveTodos(newTodos);
	};

	function deleteTodo(text) {
		const newTodos = todos.filter(todo => todo.text !== text);
		saveTodos(newTodos);
	}

	if (!searchValue.length >= 1) {
		searchedTodos = todos;
	} else {
		searchedTodos = todos.filter(todo => {
			const todoText = todo.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return todoText.includes(searchText);
		});
	}

	return (
		<todoContext.Provider
			value={{
				completedTodos,
				totalTodos,
				deleteTodo,
				searchValue,
				setSearchValue,
				searchedTodos,
				togglesTodos,
				toogleModal,
				setToogleModal,
				todoAdd,
			}}>
			{props.children}
		</todoContext.Provider>
	);
}

export { TodoContextProvider, todoContext };
