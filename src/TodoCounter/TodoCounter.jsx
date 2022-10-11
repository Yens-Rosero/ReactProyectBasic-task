import { useContext } from "react";
import { todoContext } from "../TodoContext/todoContext";
import "./TodoCounter.css";

function TodoCounter() {
	const { completedTodos, totalTodos } = useContext(todoContext);
	return (
		<>
			<h2 className='TodoCounterTitle'>
				You have {completedTodos} task completed for {totalTodos}
			</h2>
		</>
	);
}

export { TodoCounter };
