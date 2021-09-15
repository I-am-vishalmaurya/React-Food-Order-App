import { useState } from "react"; 

import Cart from "./Components/Cart/Cart";
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const cartSubmitHandler = props => {
    setCartIsShown(true);
  }

  const closeCart = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose = {closeCart}/>}
      <Header onCartClickHandler = {cartSubmitHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
