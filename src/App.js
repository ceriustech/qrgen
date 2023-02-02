import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationContainer from './components/Navigation/NavigationContainer';
import Footer from './components/Footer/Footer';
import Layout from './global/components/Layout';
import './App.css';
import { routes } from './routes/Routes';

const Pages = routes.map(({ path, page }, key) => (
	<Route exact path={path} element={page} key={key} />
));

function App() {
	return (
		<div className="App">
			<Header>
				<NavigationContainer />
			</Header>
			<Layout>
				<Routes>{Pages}</Routes>
			</Layout>
			<Footer />
		</div>
	);
}

export default App;
