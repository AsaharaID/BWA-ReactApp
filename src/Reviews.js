import React from 'react';
import './App.css';

function Reviews() {
	//JSON data example
	const users = [
		{
			id: 1,
			img: "https://forums.pcgamer.com/data/avatars/l/15/15548.jpg",
			name: "PC Gamer",
			review:
				"Valorant transforms the best of CS:GO with agents and abilities, resulting in an exceptional FPS that everyone should try.",
		},
		{
			id: 2,
			img: "https://yt3.ggpht.com/ytc/AKedOLQx8Twrz630EADSdF-etb9DeexM2jtuDIUy7SfnEQ=s900-c-k-c0x00ffffff-no-rj",
			name: "PC GamesN",
			review:
				"Valorant is not original. Rather, it's a successful interpretation of and expansion on its inspirations, with impeccable gameplay, well-designed maps, and a dev team eager to refine it further.",
		},
		{
			id: 3,
			img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Metacritic_M.png",
			name: "Metacritic",
			review:
				" A 5v5 character-based tactical shooter. Imagine this: tactical shooter meets hypernatural powers. Everyone’s got guns and a unique set of abilities, so how do you beat someone with the speed of wind? Use your own moves to outplay them and beat them to the shot. VALORANT is a game for bold strategists who dare to make the unexpected play, because if it wins, it works",
		},
	];
	const listReview = users.map((itemReview) => (
        <div key={itemReview.id} className="Item">
			<img src={itemReview.img}></img>
			<div className="User">
				<h3>{itemReview.name}</h3>
				<p>{itemReview.review}</p>
			</div>
		</div>
	));
	return (
		<div className="Review-box">
			<h2>Reviews</h2>
			{listReview}
		</div>
	);
}


export default Reviews;