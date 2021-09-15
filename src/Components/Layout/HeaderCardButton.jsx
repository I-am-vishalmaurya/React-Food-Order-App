import { useContext } from 'react';

import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCardButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCardButton = (props) => {
    const cartCtx = useContext(CartContext);

    const numberOfItemsInCart = cartCtx.items.reduce((acc, item) => {
        console.log("Cart Item Here")
        return acc + item.amount;
    }, 0)

    return(
        <button onClick={props.onClick} className={classes.button}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {numberOfItemsInCart}
            </span>
            
        </button>
    );
}

export default HeaderCardButton;