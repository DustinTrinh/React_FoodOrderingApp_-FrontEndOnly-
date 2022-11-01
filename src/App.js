import React, { Fragment, useState } from "react";
import Header from "./components/Layout/Header/JS/Header";
import Meals from "./components/Meals/JS/Meals";
import Cart from "./components/Cart/JS/Cart";
import CartProvider from "./Store/CartProvider";

function App() {
    const [cartShown, setCartShown] = useState(false);

    const showCartHandler = () => {
        setCartShown(true);
    };

    const hideCartHandler = () => {
        setCartShown(false);
    };

    return (
        <Fragment>
            <CartProvider>
                {cartShown && <Cart onClose={hideCartHandler} />}
                <Header onShowCart={showCartHandler} />
                <main>
                    <Meals />
                </main>
            </CartProvider>
        </Fragment>
    );
}

export default App;
