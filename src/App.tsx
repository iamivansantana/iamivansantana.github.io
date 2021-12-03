import { useContext } from 'react';
import CoverPage from './components/coverPage/CoverPage';
import Modal from './components/modal/Modal';
import ModalScreen from './components/modal/ModalScreen';
import ModalContext from './context/modalContext/ModalContext';

function App() {
	//Context de las funciones de la ventana Modal
	const { isOpen, setIsOpen, imagenModal } = useContext(ModalContext);
	return (
		<>
			<div className='body'>
				<div style={{ position: 'relative', zIndex: 1 }}>
					<Modal open={isOpen} onClose={() => setIsOpen(false)}>
						{imagenModal ? (
							<ModalScreen
								largeImageURL={imagenModal.largeImageURL}
								tags={imagenModal.tags}
							/>
						) : null}
					</Modal>
				</div>
				<div className='containerProject'>
					<div className='border-project'>
						<CoverPage />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
