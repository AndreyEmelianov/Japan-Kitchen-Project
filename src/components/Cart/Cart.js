import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = ({ onHideCartHandler }) => {
	const cartItems = <ul className={styles['cart-items']}>{[]}</ul>;

	return (
		<Modal onHideCartHandler={onHideCartHandler}>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>49.99</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={onHideCartHandler}>
					Закрыть
				</button>
				<button className={styles.button}>Заказать</button>
			</div>
		</Modal>
	);
};

export default Cart;
