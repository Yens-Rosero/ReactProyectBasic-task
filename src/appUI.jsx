import "./App.css";
import { useContext } from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { todoContext } from "./TodoContext/todoContext";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { ModalApp } from "./modal";
import { TodoForm } from "./TodoForm/todoForm";
import picture from "./picture.jpg";

function AppUI() {
	const {
		deleteTodo,
		searchedTodos,
		togglesTodos,
		toogleModal,
		setToogleModal,
	} = useContext(todoContext);
	return (
		<div className='todo-container'>
			<div className='todo-left'>
				<h1 className='todo-title'>Welcome to menu To-Do :D </h1>
				<div className='img-container'>
					<img className='todo-image' src={picture}></img>
				</div>
				<CreateTodoButton
					setToogleModal={setToogleModal}
					toogleModal={toogleModal}
				/>
			</div>
			<div className='todo-right'>
				<TodoCounter />
				<TodoSearch />

				<TodoList>
					{searchedTodos.map((todo) => (
						<TodoItem
							key={todo.text}
							completed={todo.completed}
							text={todo.text}
							completeTodos={() => togglesTodos(todo.text)}
							deleteTodo={() => deleteTodo(todo.text)}
						/>
					))}
				</TodoList>
			</div>
			{toogleModal && (
				<ModalApp toogleModal={toogleModal} setToogleModal={setToogleModal}>
					<TodoForm setToogleModal={setToogleModal} />
				</ModalApp>
			)}
		</div>
	);
}

export { AppUI };
