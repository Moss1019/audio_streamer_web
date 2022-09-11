import { Provider } from "react-redux";
import MainPage from "./pages/main-page";
import store from "./store";
import ThemeSelector from "./theme-selector";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Provider store={store}>
					<ThemeSelector>
						<MainPage />
					</ThemeSelector>
				</Provider>
			</header>
		</div>
	);
}

export default App;
