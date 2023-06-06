import styles from './Cart.module.css';

const Cart = () => {
	const cartItems = <ul className={styles['cart-items']}>{[]}</ul>;

	return (
		<div>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>49.99</span>
			</div>
			<div className={styles.actions}>
				<button className={styles['button--alt']}>Закрыть</button>
				<button className={styles.button}>Заказать</button>
			</div>
		</div>
	);
};

export default Cart;
