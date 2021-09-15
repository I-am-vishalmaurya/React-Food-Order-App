import { useContext } from 'react';
import classess from './MealItem.module.css';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';



const MealsItems = (props) => {
   const cartCtx2 = useContext(CartContext)
  
   const price = `$${props.price.toFixed(2)}`;

    const addToCartHandler = (amount) => {
      
      cartCtx2.addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      });
      
    }
  return (
    <li className={classess.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classess.description}>{props.description}</div>
        <div className={classess.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
      </div>
    </li>
  );
};

export default MealsItems;
