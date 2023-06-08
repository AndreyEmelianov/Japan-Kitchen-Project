import { useContext, useState } from 'react';

import SubmitOrder from './SubmitOrder/SubmitOrder';
import CartItem from './CartItem/CartItem';
import CartContext from '../../store/cart-context';
import Modal from '../UI/Modal/Modal';
import styles from './Cart.module.css';

const Cart = ({ onHideCartHandler }) => {
	const [isSubmitOrderAvailable, setIsSubmitOrderAvailable] = useState(false);
	const [isDataSubmitting, setIsDataSubmitting] = useState(false);
	const [wasDataSendingSuccessful, setWasDataSendingSuccessful] = useState(false);

	const cartContext = useContext(CartContext);

	const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;
	const hasItems = cartContext.items.length > 0;

	const removeCartItemHandler = (id) => {
		cartContext.removeItem(id);
	};

	const addCartItemHandler = (item) => {
		cartContext.addItem({ ...item, amount: 1 });
	};

	const orderHandler = () => {
		setIsSubmitOrderAvailable(true);
	};

	const submitOrderHandler = async (userData) => {
		setIsDataSubmitting(true);

		await fetch('https://japan-kitchen-default-rtdb.firebaseio.com/orders.json', {
			method: 'POST',
			body: JSON.stringify({
				user: userData,
				orderedMeals: cartContext.items,
			}),
		});

		setIsDataSubmitting(false);
		setWasDataSendingSuccessful(true);
		cartContext.clearCart();
	};

	const cartItems = (
		<ul className={styles['cart-items']}>
			{cartContext.items.map((item) => (
				<CartItem
					key={item.id}
					name={item.name}
					amount={item.amount}
					price={item.price}
					onAdd={addCartItemHandler.bind(null, item)}
					onRemove={removeCartItemHandler.bind(null, item.id)}
				/>
			))}
		</ul>
	);

	const modalButtons = (
		<div className={styles.actions}>
			<button className={styles['button--alt']} onClick={onHideCartHandler}>
				Закрыть
			</button>
			{hasItems && (
				<button className={styles.button} onClick={orderHandler}>
					Заказать
				</button>
			)}
		</div>
	);

	const cartModalContent = (
		<>
			{cartItems}
			<div className={styles.total}>
				<span>Итого</span>
				<span>{totalAmount}</span>
			</div>
			{isSubmitOrderAvailable && (
				<SubmitOrder
					onHideCartHandler={onHideCartHandler}
					submitOrderHandler={submitOrderHandler}
				/>
			)}
			{!isSubmitOrderAvailable && modalButtons}
		</>
	);

	const dataSubmittingCartModalContent = <p>Отправка данных заказа...</p>;

	const dataWasSubmitedCartModalContent = (
		<>
			<p>Ваш заказ успешно отправлен</p>
			<div className={styles.actions}>
				<button className={styles['button--alt']} onClick={onHideCartHandler}>
					Закрыть
				</button>
			</div>
		</>
	);

	return (
		<Modal onHideCartHandler={onHideCartHandler}>
			{!isDataSubmitting && !wasDataSendingSuccessful && cartModalContent}
			{isDataSubmitting && dataSubmittingCartModalContent}
			{wasDataSendingSuccessful && dataWasSubmitedCartModalContent}
		</Modal>
	);
};

export default Cart;
