import { useState } from 'react';
import ModalContext from './ModalContext';

//Definicion de interface para children
interface iProps {
	children: JSX.Element | JSX.Element[];
}

const ModalProvider = ({ children }: iProps) => {
	//State de Ventana Modal
	const [isOpen, setIsOpen] = useState(false);

	//State que almacena informacion de la imagen abierta.
	const [imagenModal, setImagenModal] = useState({});

	return (
		<ModalContext.Provider
			value={{ isOpen, setIsOpen, imagenModal, setImagenModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};

export default ModalProvider;
