import styles from './Header.module.css';
import sushiImg from '../../../assets/sushi.jpg';
import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

const Header = ({ onShowCartHandler }) => {
	return (
		<>
			<header className={styles.header}>
				<h1>Японская кухня</h1>
				<HeaderCartButton onShowCartHandler={onShowCartHandler} />
			</header>
			<div className={styles['main-image']}>
				<img src={sushiImg} alt="Блюда японской кухни" />
			</div>
		</>
	);
};

export default Header;
