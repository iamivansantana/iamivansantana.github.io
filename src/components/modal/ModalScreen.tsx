import { useCallback, useContext, useEffect } from 'react';
import ModalContext from '../../context/modalContext/ModalContext';
import './Modal.css';

const ModalScreen = ({ largeImageURL, tags }: any) => {
	// acceso al contex
	const { setIsOpen } = useContext(ModalContext);

	//Cerrar con tecla Esc
	const escFunction = useCallback(
		(event) => {
			if (event.keyCode === 27) {
				setIsOpen(false);
			}
		},
		[setIsOpen]
	);
	useEffect(() => {
		document.addEventListener('keydown', escFunction, false);

		return () => {
			document.removeEventListener('keydown', escFunction, false);
		};
	}, [escFunction]);

	return (
		<>
			<div className='gallery-item-modal'>
				<div className='image-modal'>
					<img src={`${largeImageURL}`} alt={tags} />
				</div>
			</div>
		</>
	);
};

export default ModalScreen;
