import { projectsData } from '../../data/dataProjects';
import './Portfolio.css';
import PortfolioCard from './PortfolioCard';

const Portfolio = () => {
	return (
		<>
			<div className='page-Content '>
				<div className='containerListGrid'>
					{projectsData.map((project) => (
						<PortfolioCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</>
	);
};

export default Portfolio;
