import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
	const location = useLocation();
	useEffect(() => {
		//692 para poner el nav bar en el top
		// window.scrollTo(0, 692);

		//(0,0) Para mandarlo hasta el top del window
		window.scrollTo(0, 0);
	}, [location]);

	return null;
}

export default ScrollToTop;
