import './CoverPage.css';

const CoverPage = () => {
	return (
		<>
			<div className='flex flex-column flex-aling-center'>
				<div className='coverImg-container'>
					<div className='perfilImg-container'>
						<div className='perfilImg'>
							<img
								className='img-cover'
								src='assets\images\PSX_20210202_172936.jpg'
								alt='imgPerfil'
							/>
						</div>
					</div>
					<img
						className='img-cover'
						src='assets\images\lyberty2.jpg'
						alt='Cover-img'
					/>
				</div>
				<div className='flex flex-justify-end coverBtn-container'>
					<button className='btn-follow text-size-normal' type='button'>
						Follow
					</button>
					<div className='btn-dots-container flex flex-center'>
						<button className='btn-dots text-size-normal' type='button'>
							● ● ●
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default CoverPage;
