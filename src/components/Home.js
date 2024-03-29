import React from "react";
import { useState } from "react";
import NavBar from "./NavBar";
import Carousel1 from "./Carousel1";
import Categories from "./categories";
import Carousal2 from "./Carousal2";
import Footer from "./Footer";
import '../cssfiles/home.css';
const Home = ({isLogged,updateLogged}) => {


	return (
		<div >
			<div className="homebody">
			<NavBar isLogged={isLogged} updateLogged={updateLogged} />
			<Carousel1 />
			<Categories />
			<h2  id="productgallery">Product Gallery</h2>
			<Carousal2 />
			<Footer />
			</div>
		</div>
	);
};

export default Home;
