import { Provider } from "react-redux";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";


function App(): JSX.Element {
	return (
		<Provider store={store}>
			<HashRouter>
				<main className="app">
				</main>
			</HashRouter>
		</Provider>
	);
}

export default App;
