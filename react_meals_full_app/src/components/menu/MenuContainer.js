import React from "react";
import MenuItem from "./MenuItem";

import styles from "./MenuContainer.module.css";
// ----------------------------------------------

const MenuContainer = (props) => {
	return (
		<div className={styles.menu_container}>
			{props.menuItems.map((item) => {
				return <MenuItem key={item.id} item={item} />;
			})}
		</div>
	);
};

export default MenuContainer;
