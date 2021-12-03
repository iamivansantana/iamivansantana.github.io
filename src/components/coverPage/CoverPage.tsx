import { useContext } from 'react';
import ModalContext from '../../context/modalContext/ModalContext';
import './CoverPage.css';

const CoverPage = () => {
	//Acceso al Context
	const { setIsOpen, setImagenModal } = useContext(ModalContext);

	//Funcion para abrir Ventana Modal.
	const modaClick = (imgPath: string, ingTag: string) => {
		//Abre Modal
		setIsOpen(true);
		//pasa informacion de la imagen al state imagenModal en modalState.
		setImagenModal({ largeImageURL: imgPath, tags: ingTag });
	};

	return (
		<>
			<div className='flex flex-column flex-aling-center'>
				<div className='coverImg-container'>
					<div className='perfilImg-container'>
						<div
							className='perfilImg'
							onClick={() => modaClick('assets/images/ios-perfil.png', 'imgPerfil')}
						>
							<img
								className='img-cover'
								src='assets\images\ios-perfil.png'
								alt='imgPerfil'
							/>
						</div>
					</div>
					<img
						onClick={() => modaClick('assets/images/lyberty2.jpg', 'imgPerfil')}
						className='img-cover img-Hover'
						src='assets\images\lyberty2.jpg'
						alt='Cover-img'
					/>
				</div>
				<div className='flex flex-justify-end coverBtn-container'>
					{/* Boton FOLLOW */}
					{/* <button className='btn-follow text-size-normal text-bold' type='button'>
						Follow
					</button> */}
					<span className='cover-Tittle'>Software Egineer</span>
					<div className='btn-dots-container flex flex-center'>
						<button className='btn-dots text-size-normal' type='button'>
							● ● ●
						</button>
					</div>
				</div>
				<div className='flex'>
					<div className='cover-Desc-Container flex flex-column'>
						<p className='cover-Desc-name text-bold'>
							Ivan Santana{' '}
							<span
								style={{
									color: 'var(--colorBarActive)',
									fontSize: '1.5rem',
									WebkitTextStroke: '2px #fff',
								}}
							>
								●
							</span>
						</p>
						<div style={{ color: 'var(--textColorDisable)', fontWeight: 'lighter' }}>
							<span>@Iamivansantana </span>
							<span>📍Chilpancingo.Gro.</span>
						</div>
						<p className='cover-Desc-desc text-size-normal'>
							Dolor ut dolore et voluptate esse ipsum qui ea mollit esse. In est irure
							ullamco sint magna laboris dolore sit eiusmod. Aliqua fugiat sint
							exercitation exercitation pariatur eiusmod labore non. Dolor ut dolore et
							voluptate esse ipsum qui ea mollit esse. In est irure
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverPage;
