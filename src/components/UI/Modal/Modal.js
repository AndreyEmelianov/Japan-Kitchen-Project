import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Backdrop = ({ onHideCartHandler }) => {
	return <div className={styles.backdrop} onClick={onHideCartHandler}></div>;
};

const ModalWindow = (props) => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	);
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop onHideCartHandler={props.onHideCartHandler} />,
				portalElement
			)}
			{ReactDOM.createPortal(<ModalWindow>{props.children}</ModalWindow>, portalElement)}
		</>
	);
};

export default Modal;
