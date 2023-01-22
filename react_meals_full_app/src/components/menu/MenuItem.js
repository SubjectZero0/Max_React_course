import { React, Fragment } from "react";
import styles from "./MenuItem.module.css";
import AddItemForm from "./AddItemForm";

// ------------------------------------------------------------

const MenuItem = (props) => {
	return (
		<Fragment>
			<div className={styles.menu_item__container}>
				<div className={styles.menu_item__item}>
					<h3>{props.item.foodName}</h3>
					<p>{props.item.foodDesc}</p>
					<h3 className={styles.menu_item__item_price}>{props.item.foodPrice}</h3>
				</div>

				<AddItemForm />
			</div>
		</Fragment>
	);
};

export default MenuItem;
