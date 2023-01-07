import React from "react";
import styles from "./LandingCard.module.css";

const LandingCard = () => {
	return (
		<div className={styles.card__container}>
			<h1 className={styles.card__text}>Delicious food, Delivered to your door!</h1>
			<p className={styles.card__text}>
				Choose your favourite meal from our broad selection of available meals and enjoy a delicious lunch, or dinner, at home.
			</p>
			<p className={styles.card__text}>
				All our meals are cooked with high quality ingredients, just in time and, of course, by our experienced chefs!
			</p>
		</div>
	);
};

export default LandingCard;
