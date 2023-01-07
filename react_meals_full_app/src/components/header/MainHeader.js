import React, { Fragment } from "react";
import NavBar from "./NavBar";
import styles from "./MainHeader.module.css";

const MainHeader = () => {
	return (
		<Fragment>
			<NavBar />
			<div className={styles.main_header__image}>
				<img src="/platter.jpg" alt="" />
			</div>
		</Fragment>
	);
};

export default MainHeader;
