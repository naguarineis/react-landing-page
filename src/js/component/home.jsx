import React from "react";
import Navbar from "./Navbar.jsx";
import Hero from "./Hero.jsx";
import CardArray from "./CardArray.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Hero
				title="A Warm Welcome!"
				text="Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Magnam pariatur veniam animi perferendis. Beatae repellat
				modi in enim ipsum, alias voluptatibus corrupti natus.
				Numquam repudiandae vel officia dolores animi assumenda."
				buttonLabel="Call to action!"
			/>
			<CardArray />
			<Footer />
		</>
	);
};

export default Home;
