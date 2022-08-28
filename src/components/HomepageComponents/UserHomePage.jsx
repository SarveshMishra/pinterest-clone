/* eslint-disable react/jsx-key */
import React from 'react';
import '../../css/user_homepage.css';
import ImageCard from '../ImageCard/ImageCard';
const randomWords = require('random-words');
export const UserHomePage = () => {
	const [list1, setList1] = React.useState([]);
	const [list2, setList2] = React.useState([]);
	const [list3, setList3] = React.useState([]);
	const [list4, setList4] = React.useState([]);
	const word = randomWords();
	React.useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random/?client_id=${process.env.REACT_APP_UNSPLASH_API_KEY}&count=30&topics=${word}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				if (!data) {
					alert('Oops, API use limit reached, please try again after one hour');
					return;
				} else {
					console.log(data);
					setList1(data.slice(0, 8));
					setList2(data.slice(7, 15));
					setList3(data.slice(14, 22));
					setList4(data.slice(21, 30));
				}
			});
	}, []);
	return (
		<div className='home_page_container'>
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
