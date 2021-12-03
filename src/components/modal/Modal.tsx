import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ open, children, onClose }: any) {
	//Si ventana modal no esta avierta retornar null.
	if (!open) return null;

	// ReactDOM.createPortal para crear portal para Modal.
	return ReactDOM.createPortal(
		<>
			<div className='OVERLAY_STYLES' onClick={onClose} />
			<div className='MODAL_STYLES'>
				{/* <button onClick={onClose}>Close Modal</button> */}
				{children}
			</div>
		</>,
		// Referencia al id del portal en el html.
		document.getElementById('portal')!
	);
}
export default Modal;
