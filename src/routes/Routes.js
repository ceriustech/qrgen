import Home from '../pages/Home';
import Faq from '../pages/FAQ';

export const routes = [
	{
		id: 'home',
		page: <Home />,
		name: 'Home',
		path: '/',
	},
	{
		id: 'faq',
		page: <Faq />,
		name: 'FAQ',
		path: '/faq',
	},
];
