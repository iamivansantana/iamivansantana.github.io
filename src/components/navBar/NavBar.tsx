import { useEffect } from 'react';
import './NavBar.css';

const NavBar = () => {
	useEffect(() => {
		const marker: any = document.querySelector('#marker');
		const item = document.querySelectorAll('nav a');

		const indicador = (e: any) => {
			marker.style.left = e.offsetLeft + 'px';
			marker.style.width = e.offsetWidth + 5 + 'px';
		};
		item.forEach((link) => {
			link.addEventListener('click', (e) => {
				indicador(e.target);
			});
		});

		// item.forEach((link) => {
		// 	link.addEventListener('mouseover', (e) => {
		// 		indicador(e.target);
		// 	});
		// });
	}, []);

	return (
		<>
			<div>
				<nav className='navBar-container flex'>
					<div id='marker2' />
					<div id='marker' />
					<a href='#d'>Me </a>
					<a href='#dd'>Projects</a>
					<a href='#d'>others</a>
				</nav>
			</div>
		</>
	);
};

export default NavBar;
