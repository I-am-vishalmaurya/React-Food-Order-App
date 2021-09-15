import { useContext } from "react";
import CartContext from "../../store/cart-context";

import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCxt3 = useContext(CartContext);
  const newTotalAmount = `$${cartCxt3.totalAmount.toFixed(2)}`;
  const hasItems = cartCxt3.items.length > 0;
  const cartItemRemoveHandler = (id) => {
    cartCxt3.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
      cartCxt3.addItem({...item, amount: 1});
  };
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCxt3.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          />
        );
      })}
    </ul>
  );
  return (
    <Modal onClose={props.onClose}>
      {cartItem}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>{newTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
