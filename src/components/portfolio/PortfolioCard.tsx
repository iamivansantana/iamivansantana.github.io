import './PortfolioCard.css';

const PortfolioCard = ({ project }: any) => {
	return (
		<>
			<div className='project-card-content flex flex-column'>
				<div className='flex flex-justify-between project-card-head'>
					<a
						className='text-size-subtittle text-bold project-card-name'
						href={project.urlSite}
						target='_blank'
						rel='noopener noreferrer'
					>
						<span style={{ marginRight: '5px' }}>
							<img
								width='15px'
								src='assets\icons\icon-ghost.svg'
								alt='Fantasma-icon'
							/>
						</span>
						{project.name}
					</a>
					<a
						className='portfolio-github-enlace'
						href={project.urlGithub}
						target='_blank'
						rel='noopener noreferrer'
						style={{ textDecoration: 'none' }}
					>
						<img width='30px' src='assets\icons\icon-github.svg' alt='github' />
					</a>
				</div>
				<div>
					<p className='portfolio-card-desc'>{project.description}</p>
				</div>
				<div className='portfolio-img '>
					<img className='img-cover' src={project.imgDeskPath} alt='web-img' />
				</div>
			</div>
		</>
	);
};

export default PortfolioCard;
