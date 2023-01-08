import { React, Fragment } from "react";
import styles from "./MenuItem.module.css";
import AddButton from "./AddButton";

// ------------------------------------------------------------

const MenuItem = (props) => {
	return (
		<Fragment>
			<div className={styles.menu_items__container}>
				<div className={styles.menu_items__item}>
					<h3>{props.item.foodName}</h3>
					<p>{props.item.foodDesc}</p>
					<h3 className={styles.menu_items__item_price}>{props.item.foodPrice}</h3>
				</div>

				<div className={styles.menu_items__form}>
					<AddButton />
				</div>
			</div>
		</Fragment>
	);
};

export default MenuItem;
