import { useState } from 'react';

import CartContextProvider from './store/CartContextProvider';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header/Header';
import Meals from './components/Meals/Meals';

function App() {
	const [cartIsVisible, setCartIsVisible] = useState(false);

	const showCartHandler = () => {
		setCartIsVisible(true);
	};

	const hideCartHandler = () => {
		setCartIsVisible(false);
	};

	return (
		<CartContextProvider>
			{cartIsVisible && <Cart onHideCartHandler={hideCartHandler} />}
			<Header onShowCartHandler={showCartHandler} />
			<main>
				<Meals />
			</main>
		</CartContextProvider>
	);
}

export default App;
