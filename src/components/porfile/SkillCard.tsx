import './Porfile.css';

const SkillCard = ({ skill }: any) => {
	return (
		<>
			<div key={skill.id} className='flex porfile-skill flex-aling-center'>
				<div className='porfile-skill-img-border flex flex-center'>
					<div className='porfile-skill-img'>
						<img className='img-cover' src={skill.imgUrl} alt={skill.imgTag} />
					</div>
				</div>
				<div style={{ color: 'var(--textColorDisableLight)' }}>{skill.name}</div>
			</div>
		</>
	);
};

export default SkillCard;
