import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';
import NotFound from '../components/notFound/NotFound';
import Porfile from '../components/porfile/Porfile';
import Portfolio from '../components/portfolio/Portfolio';
// import ScrollToTop from './ScrollToTop';

const RouteApp = () => {
	return (
		<>
			<BrowserRouter>
				<div className='stiky'>
					<NavBar />
				</div>
				{/* <ScrollToTop /> */}
				<Routes>
					<Route path='/' element={<Porfile />} />
					<Route path='portfolio/' element={<Portfolio />} />
					<Route path='/*' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default RouteApp;
