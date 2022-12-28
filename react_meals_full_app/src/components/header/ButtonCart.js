import React from "react";
import styles from "./ButtonCart.module.css";

const ButtonCart = () => {
	return (
		<button type="button" className={styles.button__button}>
			<img className={styles.cart__icon} src="/online-shop.png" alt=""></img>
			<h1 className={styles.cart__items}>Your Items:</h1>
			<span className={styles.cart__quantity__container}>
				<span className={styles.cart__quantity__text}>0</span>
			</span>
		</button>
	);
};

export default ButtonCart;
