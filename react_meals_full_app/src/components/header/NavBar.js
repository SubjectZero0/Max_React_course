import React from "react";
import ButtonCart from "./ButtonCart";
import navStyles from "./NavBar.module.css";

const NavBar = () => {
	return (
		<div className={navStyles.navbar_container}>
			<h1 className={navStyles.logo__name}>ReactMeals</h1>
			<ButtonCart />
		</div>
	);
};

export default NavBar;
