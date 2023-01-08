import React from "react";
import MenuItem from "./MenuItem";
import { v4 as uuidv4 } from "uuid";
import styles from "./MenuContainer.module.css";
// ----------------------------------------------

// define a class of FoodItems for the MenuContainer to use
class FoodItems {
	foodName;
	foodPrice;
	foodDesc;
	id;
	constructor(name, price, desc) {
		this.foodName = name;
		this.foodPrice = price;
		this.foodDesc = desc;
		this.id = uuidv4();
	}

	// getter
	get foodProps() {
		return {
			foodName: String(this.foodName),
			foodPrice: Number(this.foodPrice),
			foodDesc: String(this.foodDesc),
			id: this.id,
		};
	}

	// setter
	set foodProps(foodItem) {
		this.foodName = foodItem.foodName;
		this.foodPrice = foodItem.foodPrice;
		this.foodDesc = foodItem.foodDesc;
		this.id = uuidv4();
	}
}

// ---------------------------------------------------------------

// Define the items to display in the menu
const menuItemsObj = {
	sushi: new FoodItems("Sushi", 22.99, "Finest fish and veggies"),
	schnitzel: new FoodItems("Schnitzel", 16.59, "German specialty!"),
	souvlaki: new FoodItems("Souvlaki", 5.99, "Pita bread with gyros, fries, veggies and tzatziki!"),
	burger: new FoodItems("Cheeseburger", 12.59, "American, raw, meaty"),
};

const menuItems = Object.values(menuItemsObj);
console.log(menuItems);

const MenuContainer = () => {
	return (
		<div className={styles.menu_container}>
			{menuItems.map((item) => {
				return <MenuItem key={item.id} item={item} />;
			})}
		</div>
	);
};

export default MenuContainer;
