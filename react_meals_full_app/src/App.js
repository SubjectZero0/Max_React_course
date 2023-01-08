import React from "react";
import MainHeader from "./components/header/MainHeader";
import LandingCard from "./components/landing/LandingCard";
import MenuContainer from "./components/menu/MenuContainer";

// -------------------------------------------

function App() {
	return (
		<React.Fragment>
			<MainHeader />
			<LandingCard />
			<MenuContainer />
		</React.Fragment>
	);
}

export default App;
