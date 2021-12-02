/** @format */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReviewItems from "./Reviews";
import PropTypes from "prop-types";

function App() {
	return (
		<div className="Parentbox">
			<FotoProduk />
			<ProdukInfo isEvent="yes" name="Valorant" category="RIOT GAMES" />
			<ReviewItems />
		</div>
	);
}

function FotoProduk() {
	return (
		<div className="Foto">
			<img src="valorant.png"></img>
		</div>
	);
}

function CheckEvent(props) {
	const { isEvent, discount } = props;
	if (isEvent == "yes") {
		return <p>New Battlepass Has Come! Discount {discount}%</p>;
	} else {
		return <p>Wait for the next update!</p>;
	}
}

function ProdukInfo(props) {
	const { category, name, isEvent } = props;
	const benefits = ["10 More Skin in New Battlepass", "3 Free skin Battlepass"];
	const listBenefits = benefits.map((itemBenefit) => (
		<li key={itemBenefit}>{itemBenefit}</li>
	));
	return (
		<div>
			<div className="Deskripsi">
				<a className="Cate">{category}</a>
				<h2 className="Title">{name}</h2>
				<a className="Genre">FPS, Shooter</a>
				<CheckEvent isEvent={isEvent} discount={30} />
				<p className="Info">
					Valorant is a team-based first-person hero shooter set in the near
					future. Players play as one of a set of agents, characters designed
					based on several countries and cultures around the world. In the main
					game mode, players are assigned to either the attacking or defending
					team with each team having five players on it.
				</p>
				<ul>{listBenefits}</ul>
				<a
					onClick={(e) => Tambahan(name, e)}
					href="https://playvalorant.com/"
					target="_blank"
					className="Button"
				>
					More Info
				</a>
			</div>
		</div>
	);
}

function Tambahan(e) {
	return console.log("More Info " + e);
}

CheckEvent.propTypes = {
	discount: PropTypes.number.isRequired
}
export default App;
