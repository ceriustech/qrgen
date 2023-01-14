import Header from './components/Header';
import Container from './global/components/Layout/styles';
import TabView from './global/components/Utility/Tabs/Tabs';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<TabView />
			</Container>
		</div>
	);
}

export default App;
