import React from "react";
import "../../css/user_homepage.css";
import ImageCard from "../ImageCard/ImageCard";
const randomWords = require("random-words");

export const UserHomePage = () => {
	const [list1, setList1] = React.useState([]);
	const [list2, setList2] = React.useState([]);
	const [list3, setList3] = React.useState([]);
	const [list4, setList4] = React.useState([]);
	const word_array = randomWords(4);
	React.useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g&count=10&topics=${word_array[0]}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setList4(data);
			});
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g&count=10&topics=${word_array[1]}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setList3(data);
			});
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g&count=10&topics=${word_array[2]}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setList2(data);
			});
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g&count=10&topics=${word_array[3]}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);
				setList1(data);
			});
	}, []);
	return (
		<div className="home_page_container">
			<div>
				{list1.map((ele) => {
					return <ImageCard image={ele.urls.small} id={ele.id} />;
				})}
			</div>
			<div>
				{list2.map((ele) => {
					return <ImageCard image={ele.urls.small} id={ele.id} />;
				})}
			</div>
			<div>
				{list3.map((ele) => {
					return <ImageCard image={ele.urls.small} id={ele.id} />;
				})}
			</div>
			<div>
				{list4.map((ele) => {
					return <ImageCard image={ele.urls.small} id={ele.id} />;
				})}
			</div>
			<div>
				{list1.map((ele) => {
					return <ImageCard image={ele.urls.small} id={ele.id} />;
				})}
			</div>
		</div>
	);
};
