import MainPage from "./pages/main-page";
import ThemeSelector from "./theme-selector";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<ThemeSelector>
					<MainPage />
				</ThemeSelector>
			</header>
		</div>
	);
}

export default App;
