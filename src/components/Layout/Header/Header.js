import styles from './Header.module.css';
import sushiImg from '../../../assets/sushi.jpg';

const Header = () => {
	return (
		<>
			<header className={styles.header}>
				<h1>Японская кухня</h1>
				<button>Корзина</button>
			</header>
			<div className={styles['main-image']}>
				<img src={sushiImg} alt="Блюда японской кухни" />
			</div>
		</>
	);
};

export default Header;
