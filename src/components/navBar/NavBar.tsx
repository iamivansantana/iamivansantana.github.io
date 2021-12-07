import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
	//useLocation para conocer el path
	const { pathname } = useLocation();

	//Effect que controla el comportamiento del indicador del NavBar
	useEffect(() => {
		//Referencia al Marcador
		const marker: HTMLElement | null = document.querySelector('#marker');
		//Referencia a la lista de elementos Navlink
		const item: NodeListOf<Element> = document.querySelectorAll('nav a');

		//Metodo para definir posicion y tamaño del marcador
		//Recive e (evento - Elemento NavLink)
		const indicador = (e: any) => {
			//Si marcador existe
			if (marker) {
				//Se asigna el tamaño en pixeles del lado izquierdo, dependiendo del evento(Elemeto NavLink)
				marker.style.left = e.offsetLeft + 'px';
				//Se asigna el tamaño en pixeles del width, dependiendo del evento(Elemeto NavLink)
				marker.style.width = e.offsetWidth + 5 + 'px';
			} else return;
		};

		//Metodo para asignar Marcador (NavLink Active)
		const asignadorMarker = () => {
			if (pathname === '/') {
				//Path user
				indicador(item[0]);
			} else if (pathname === '/portfolio') {
				//Path portfolio
				indicador(item[1]);
			} else if (pathname === '/others') {
				//Path other
				indicador(item[3]);
			}
		};
		//Se ejecuta metodo
		asignadorMarker();

		//Mouseover
		//Cuando el mouse esta encima cambia el marker
		item.forEach((link: Element) => {
			link.addEventListener('mouseover', (e) => {
				indicador(e.target);
			});
		});

		//Mouseout
		//Cuando el mouse ya no está encima cambia el marker al correspondiente dependiendo el path
		item.forEach((link: Element) => {
			link.addEventListener('mouseout', asignadorMarker);
		});

		// Devolvemos una función para anular la suscripción a los eventos
		return () => {
			window.removeEventListener('mouseover', (e) => {
				indicador(e.target);
			});
			window.removeEventListener('mouseout', asignadorMarker);
		};
	}, [pathname]);

	return (
		<>
			<div>
				<nav className='navBar-container flex '>
					<div id='marker' />
					<div id='marker2' />
					<NavLink
						onClick={() => window.scrollTo(0, 600)}
						className='NavLink'
						to='/'
					>
						<div>Ivan Santana</div>
						<div className='navbar-sub'>Profile</div>
					</NavLink>
					<NavLink
						onClick={() => window.scrollTo(0, 600)}
						className='NavLink'
						to='/portfolio'
					>
						Portfolio
					</NavLink>
					<NavLink
						onClick={() => window.scrollTo(0, 600)}
						className='NavLink'
						to='/'
						style={{ fontSize: '10px' }}
					>
						● ● ●
					</NavLink>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
