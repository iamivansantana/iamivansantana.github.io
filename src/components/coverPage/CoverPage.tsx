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
						className='img-cover img-hover'
						style={{ borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
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
						{/* <p className='cover-Desc-desc text-size-normal'>
							Hello, my name is Iván Santana, I am a Software Engineer. My focus has
							been primarily front-end web development. Do not hesitate to contact me,
							You can find me on social networks and write to me, I will be happy to
							help you.🗽
						</p> */}
						<p className='cover-Desc-desc text-size-normal'>
							Front-End Developer. 🇲🇽 <br />
							Sometimes most people don't know what they want until you show it to them
							...🗽
						</p>
						<div
							className='cover-Desc-desc'
							style={{ color: 'var(--textColorDisableLight)' }}
						>
							<div className='cover-Features'>
								<span
									style={{ color: 'var(--buttonPrimaryColor)', fontWeight: 'bold' }}
								>
									{'</> '}
								</span>
								3 years of development experience
							</div>
							<div className='cover-Features'>
								<span>🖋️ </span>Designer
							</div>
							<div className='cover-Features'>
								<span>🔱 </span>Leadership
							</div>
							<div className='cover-Features'>
								<span style={{ color: 'yellow', fontWeight: 'bold' }}>{'>_ '}</span>
								Developer
							</div>
							<div className='cover-Features'>
								<span>🎙️ </span>Communication
							</div>
							<div className='cover-Features'>
								<span>💪 </span>Responsibility
							</div>
							<div className='cover-Features'>
								<span>🏆 </span>Commitment
							</div>
							<div className='cover-Features'>
								<span>❤️ </span>Empathy
							</div>
							<div className='cover-Features'>
								<span>⏳ </span>Initiative
							</div>
							<div className='cover-Features'>
								<span>🕵️ </span>Self-taught
							</div>
						</div>
						<div className='flex cover-socialMedia cover-socialMedia-icon'>
							<a
								href='https://www.linkedin.com/in/iamivansantana/'
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none' }}
								className='btn-icon-hover'
							>
								<img src='assets\icons\icon-linkedin.svg' alt='linkedIn-icon' />
							</a>
							<a
								href='https://twitter.com/IamIvanSantana'
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none' }}
								className='btn-icon-hover'
							>
								<img src='assets\icons\icon-twitter.svg' alt='twitter-icon' />
							</a>
							<a
								href='https://github.com/iamivansantana'
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none' }}
								className='btn-icon-hover'
							>
								<img src='assets\icons\icon-github.svg' alt='github-icon' />
							</a>
							<a
								href='https://www.instagram.com/ivansanttana/'
								target='_blank'
								rel='noopener noreferrer'
								style={{ textDecoration: 'none' }}
								className='btn-icon-hover'
							>
								<img src='assets\icons\icon-instagram.svg' alt='instagram-icon' />
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverPage;
