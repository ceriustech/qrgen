import Header from './components/Header';
import Footer from './components/Footer/Footer';
import Container from './global/components/Layout/styles';
import TabView from './global/components/TabView/TabView';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<TabView />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
