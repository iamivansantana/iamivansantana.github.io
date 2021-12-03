import './Modal.css';

const ModalScreen = ({ largeImageURL, tags }: any) => {
	return (
		<>
			<div className='gallery-item-modal'>
				<div className='image-modal'>
					<img src={`${largeImageURL}`} alt={tags} />
				</div>
			</div>
		</>
	);
};

export default ModalScreen;
