import { Fragment } from "react";

import HeaderCardButton from "./HeaderCardButton";

import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Order Food Online</h1>
                <HeaderCardButton onClick = {props.onCartClickHandler}/>
                </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="A table containg meals" />
            </div>
        </Fragment>
    );
}

export default Header;