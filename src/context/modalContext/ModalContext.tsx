import { createContext } from 'react';

//Definicion del typo de props que proporciona el Provider
export type ModalContextProps = {
	isOpen: boolean;
	setIsOpen: any;
	imagenModal: any;
	setImagenModal: any;
};

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export default ModalContext;
