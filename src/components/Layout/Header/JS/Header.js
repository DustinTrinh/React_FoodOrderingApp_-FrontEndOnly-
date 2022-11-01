import React, { Fragment } from "react";

import mealsImage from "../../../../assets/foodPlater.jpg";
import classes from "../CSS/Header.module.css";
import HeaderCartButton from "../../HeaderCartButton/JS/HeaderCartButton";

const Header = (props) => {
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>Food Ordering System</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt='Food Platter'/>
            </div>
        </Fragment>
    )
}

export default Header;