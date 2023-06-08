import { useRef, useState } from 'react';

import styles from './SubmitOrder.module.css';

const isInputValid = (inputValue) => inputValue.trim() !== '';

const SubmitOrder = ({ onHideCartHandler }) => {
	const [formValidity, setFormValidity] = useState({
		name: true,
		city: true,
		address: true,
	});

	const nameInputRef = useRef();
	const cityInputRef = useRef();
	const addressInputRef = useRef();

	const confirmOrderHandler = (event) => {
		event.preventDefault();

		const enteredName = nameInputRef.current.value;
		const enteredCity = cityInputRef.current.value;
		const enteredAddress = addressInputRef.current.value;

		const isEnteredNameValid = isInputValid(enteredName);
		const isEnteredCityValid = isInputValid(enteredCity);
		const isEnteredAddressValid = isInputValid(enteredAddress);

		setFormValidity({
			name: isEnteredNameValid,
			city: isEnteredCityValid,
			address: isEnteredAddressValid,
		});

		const isFormValid = isEnteredNameValid && isEnteredCityValid && isEnteredAddressValid;

		if (!isFormValid) {
			return;
		}
	};

	const nameInputClasses = `${styles.control} ${formValidity.name ? '' : styles.invalid}`;
	const cityInputClasses = `${styles.control} ${formValidity.city ? '' : styles.invalid}`;
	const addressInputClasses = `${styles.control} ${
		formValidity.address ? '' : styles.invalid
	}`;

	return (
		<form onSubmit={confirmOrderHandler} className={styles.form}>
			<div className={nameInputClasses}>
				<label htmlFor="name">Ваше Имя</label>
				<input type="text" id="name" ref={nameInputRef} />
				{!formValidity.name && <p>Пожалуйста введите имя</p>}
			</div>
			<div className={cityInputClasses}>
				<label htmlFor="city">Города</label>
				<input type="text" id="city" ref={cityInputRef} />
				{!formValidity.city && <p>Пожалуйста введите город</p>}
			</div>
			<div className={addressInputClasses}>
				<label htmlFor="address">Адрес</label>
				<input type="text" id="address" ref={addressInputRef} />
				{!formValidity.address && <p>Пожалуйста введите адрес</p>}
			</div>
			<div className={styles.actions}>
				<button className={styles.submit}>Подтвердить Заказ</button>
				<button type="button" onClick={onHideCartHandler}>
					Отменить Заказ
				</button>
			</div>
		</form>
	);
};

export default SubmitOrder;