import MealItemForm from '../MealItemForm/MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ name, description, price, id }) => {
	const formatedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formatedPrice}</div>
			</div>
			<div>
				<MealItemForm id={id} />
			</div>
		</li>
	);
};

export default MealItem;
