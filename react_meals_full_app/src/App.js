import React from "react";
import NavBar from "./components/header/NavBar";
import styles from "./App.modules.css";
import MainHeader from "./components/header/MainHeader";
import LandingCard from "./components/landing/LandingCard";

function App() {
	return (
		<React.Fragment>
			<MainHeader />
			<LandingCard />
		</React.Fragment>
	);
}

export default App;
