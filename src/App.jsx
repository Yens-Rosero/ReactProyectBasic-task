import { AppUI } from "./appUI";
import { TodoContextProvider } from "./TodoContext/todoContext";
function App() {
	return (
		<TodoContextProvider>
			<AppUI />
		</TodoContextProvider>
	);
}

export default App;
