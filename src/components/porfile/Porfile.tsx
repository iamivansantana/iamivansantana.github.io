import {
	skillsLanguages,
	skillsLibraries,
	skillsDataBases,
	skillsOthers,
} from '../../data/dataSkills';

import './Porfile.css';
import SkillCard from './SkillCard';

const Porfile = () => {
	return (
		<>
			<div className='page-Content flex flex-column'>
				<div>
					<p className='text-size-tittle text-bold' style={{ margin: '0' }}>
						About
					</p>
					<div className='porfile-desc'>
						<p>
							👋 Hello
							<br /> My name is Iván Santana.
							<br />
							<br /> I am a Software Engineer, my focus has been primarily front-end
							web development. A responsible person, committed to any project that is
							carried out, enthusiastic, creative and collaborative, working as a team,
							learning from others and helping at all times.
							<br />
							<br />
							On the other hand I love to enjoy the small and big things in life, I am
							passionate about music, I love places with live music, 🤘😎 I love to
							travel,🌎 I love dogs 🐶🐕 and my I work as a developer. 💻💪
						</p>
					</div>
					<div
						style={{
							borderBottom: '1px solid var(--backgroundColorPrimaryHover)',
							paddingBottom: '2rem',
						}}
					>
						<p
							className='text-size-tittle text-lighter'
							style={{ marginTop: '2rem' }}
						>
							Tech Stack
						</p>
						<div className='skills-grid'>
							{/* Contenedor 1 */}
							<div className='contenedor1'>
								<div className='skills-border'>
									<span>Languages</span>
									<div className='skills-container'>
										{skillsLanguages.map((skill) => (
											<SkillCard key={skill.id} skill={skill} />
										))}
									</div>
								</div>
								<div className='skills-border'>
									<span>{`Libraries & Frameworks`}</span>
									<div className='skills-container'>
										{skillsLibraries.map((skill) => (
											<SkillCard key={skill.id} skill={skill} />
										))}
										<div className='flex porfile-skill flex-aling-center'>
											<div className='porfile-skill-img-border flex flex-center'>
												<div className='porfile-skill-img flex flex-center'>
													<span className='text-lighter'>E</span>
												</div>
											</div>
											<div style={{ color: 'var(--textColorDisableLight)' }}>Express</div>
										</div>
										<div className='flex porfile-skill flex-aling-center'>
											<div className='porfile-skill-img-border flex flex-center'>
												<div className='porfile-skill-img flex flex-center'>
													<span className='text-lighter'>A</span>
												</div>
											</div>
											<div style={{ color: 'var(--textColorDisableLight)' }}>Axios</div>
										</div>
										<div className='flex porfile-skill flex-aling-center'>
											<div className='porfile-skill-img-border flex flex-center'>
												<div className='porfile-skill-img flex flex-center'>
													<span className='text-lighter'>T</span>
												</div>
											</div>
											<div style={{ color: 'var(--textColorDisableLight)' }}>Thunk</div>
										</div>
									</div>
								</div>
							</div>
							{/* Contenedor 2 */}
							<div className='contenedor2'>
								<div className='skills-border'>
									<span>Databases</span>
									<div className='skills-container'>
										{skillsDataBases.map((skill) => (
											<SkillCard key={skill.id} skill={skill} />
										))}
									</div>
								</div>
								<div className='skills-border'>
									<span>Others</span>
									<div className='skills-container'>
										{skillsOthers.map((skill) => (
											<SkillCard key={skill.id} skill={skill} />
										))}
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							borderBottom: '1px solid var(--backgroundColorPrimaryHover)',
							paddingBottom: '1rem',
						}}
					>
						<p
							className='text-size-tittle text-lighter'
							style={{ marginTop: '2rem' }}
						>
							Positions
						</p>
						<div className='flex flex-column'>
							<div className='flex flex-aling-center' style={{ marginBottom: '1rem' }}>
								<div
									className='porfile-img-position flex flex-center'
									style={{ backgroundColor: 'var(--backgroundColorPrimaryHover)' }}
								>
									<img width='40px' src='assets\images\GHOST2.png' alt='buhuhu.icon' />
								</div>
								<div className='flex flex-column'>
									<div className='text-size-subtittle'>Software Engineer. </div>
									<div
										className='text-lighter'
										style={{ color: 'var(--textColorDisableLight)' }}
									>
										Own Initiative / Feb 2021 - Present
									</div>
								</div>
							</div>
							<div className='flex flex-aling-center' style={{ marginBottom: '1rem' }}>
								<div className='porfile-img-position'>
									<img
										className='img-cover'
										src='assets\images\pcgro.webp'
										alt='pcGro.icon'
									/>
								</div>
								<div className='flex flex-column'>
									<div className='text-size-subtittle'>Front-End Developer. </div>
									<div
										className='text-lighter'
										style={{ color: 'var(--textColorDisableLight)' }}
									>
										Secretaría de Protección Civil Guerrero / Aug 2018 - Jan 2021
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						style={{
							borderBottom: '1px solid var(--backgroundColorPrimaryHover)',
							paddingBottom: '1rem',
						}}
					>
						<p
							className='text-size-tittle text-lighter'
							style={{ marginTop: '2rem' }}
						>
							Credentials
						</p>
						<div className='flex flex-column'>
							<div className='flex flex-aling-center' style={{ marginBottom: '1rem' }}>
								<div className='porfile-img-position flex flex-center'>
									<img width='80px' src='assets\images\Logo-TecNM.png' alt='tec-logo' />
								</div>
								<div className='flex flex-column'>
									<div className='text-size-subtittle'>System Enginner. </div>
									<div
										className='text-lighter'
										style={{ color: 'var(--textColorDisableLight)' }}
									>
										Instituto Tecnológico de Chilpancingo / Aug 2012 - Dec 2018
									</div>
								</div>
							</div>
						</div>
					</div>
					<div
						className='flex flex-column flex-aling-center text-lighter'
						style={{ marginTop: '1rem', color: 'var(--textColorDisable)' }}
					>
						<span>Do not hesitate to contact me.</span>
						<span>
							You can find me on social networks and write to me, I will be happy to
							help you
						</span>
						<span>Email: iam.ivansantana@gmail.com</span>
					</div>
				</div>
			</div>
		</>
	);
};

export default Porfile;
