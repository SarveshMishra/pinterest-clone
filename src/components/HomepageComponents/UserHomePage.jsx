import React from "react";
import "../../css/user_homepage.css";
import ImageCard from "../ImageCard/ImageCard";
const randomWords = require("random-words");

export const UserHomePage = () => {
	const [list, setList] = React.useState([]);
	const [list1, setList1] = React.useState([]);
	const [list2, setList2] = React.useState([]);
	const [list3, setList3] = React.useState([]);
	const [list4, setList4] = React.useState([]);
	const word = randomWords();
	// const client_id = "Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g";
	const client_id = "6o4W2NGe0d1CNDWSTfieOIFcZ5OFcx2SQ_Mrm9KcBiU";
	// const client_id = "6o4W2NGe0d1CNDWSTfieOIFcZ5OFcx2SQ_Mrm9KcBiU";

	React.useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=${client_id}&count=30&topics=${word}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				console.log(data);

				setList1(data.slice(0, 8));
				setList2(data.slice(7, 15));
				setList3(data.slice(14, 22));
				setList4(data.slice(21, 30));
			});
	}, []);

	console.log(list1);
	console.log(list2);
	console.log(list3);
	console.log(list4);

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
