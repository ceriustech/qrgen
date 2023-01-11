import Header from './components/Header';
import Container from './global/components/Layout/styles';
import QRGenerator from './components/QrCodeGenerator';
import './App.css';

function App() {
	return (
		<div className="App">
			<Header />
			<Container>
				<QRGenerator />
			</Container>
		</div>
	);
}

export default App;
