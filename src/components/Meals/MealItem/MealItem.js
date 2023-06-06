import MealItemForm from '../MealItemForm/MealItemForm';
import styles from './MealItem.module.css';

const MealItem = ({ name, description, price }) => {
	const formatedPrice = `$${price.toFixed(2)}`;

	return (
		<li className={styles.meal}>
			<div>
				<h3>{name}</h3>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{formatedPrice}</div>
			</div>
			<div>
				<MealItemForm />
			</div>
		</li>
	);
};

export default MealItem;
