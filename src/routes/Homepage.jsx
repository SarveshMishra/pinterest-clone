// Default Homepage without Login service
import "../css/homepage.css";
import React from "react";
import "animate.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Grid, Faded } from "../components/HomepageComponents/Grid";
import { Login } from "../components/Login/Login";
import down from "../img/down.svg";

const Button = styled.button`
	background-color: ${(props) => (props.signup ? "#EFEFEF" : "#E60023")};
	border-radius: 20px;
	border: none;
	color: ${(props) => (props.signup ? "#000" : "white")};
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	cursor: pointer;
	width: 100px;
	margin: 5px;

	&:hover {
		background-color: ${(props) => (props.signup ? "#ddd" : "#a3081a;")};
	}
`;
const list1 = [
	{
		image_url:
			"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
];
const list2 = [
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
];
const list3 = [
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
	},
];
const list4 = [
	{
		image_url:
			"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
];
const list5 = [
	{
		image_url:
			"https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
];
const list6 = [
	{
		image_url:
			"https://i.pinimg.com/550x/46/13/5b/46135bb6dfe9e43adb5302fe85bed6e2.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
];
const list7 = [
	{
		image_url:
			"https://i.pinimg.com/550x/43/af/6f/43af6f5aa4df62b5bc7748e40f46f4c4.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
	{
		image_url:
			"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
	},
];

export const Homepage = () => {
	const colors = ["#C28B00", "#0076D3", "#518C7B", "#507A57"];
	const delay = 2500;
	const [index, setIndex] = React.useState(0);
	const [text, setText] = React.useState("");
	const [imageArray, setImageArray] = React.useState([
		[],
		[],
		[],
		[],
		[],
		[],
		[],
	]);
	const timeoutRef = React.useRef(null);

	function resetTimeout() {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
	}

	React.useEffect(() => {
		resetTimeout();
		timeoutRef.current = setTimeout(
			() =>
				setIndex((prevIndex) =>
					prevIndex === colors.length - 1 ? 0 : prevIndex + 1
				),
			delay
		);

		const text_arr = [
			"chai time snacks idea",
			"home decor idea",
			"outfit idea",
			"DIY idea",
		];
		const pic_3d_array = [
			[
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1619581073186-5b4ae1b0caad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1561336526-2914f13ceb36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1583836632332-53825ce55a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536514888772-a269c6a8a198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1630748662359-40a2105640c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1583836632332-53825ce55a03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2hhaXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNoYWl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1572099107898-46f22b3af4f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2Ftb3NhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1632687380457-05a1271e873b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1606066889831-35faf6fa6ff6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1579384264577-79580c9d3a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1613764816537-a43baeb559c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWFuJTIwc25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1624374053855-39a5a1a41402?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwc25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1589786742305-f24d19eedbe5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aW5kaWFuJTIwc25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg",
					},
					{
						image_url:
							"https://i.pinimg.com/550x/66/3c/2b/663c2baa9a97ac56fe9c22a0fe139386.jpg",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1605276277265-84f97980a425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGluZGlhbiUyMHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1603554593710-89285666b691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwc25hY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
					{
						image_url:
							"https://i.pinimg.com/236x/16/7f/e6/167fe63d4a008f8957c8e9406953af1f.jpg",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1628294895933-4360614f39dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZGlhbiUyMHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/flagged/photo-1575873046118-3742d130fb62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGluZGlhbiUyMHNuYWNrc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
				],
			],
			[
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1513161455079-7dc1de15ef3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1618377385526-83312906f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aG9tZSUyMGRlY29yfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1623244307563-f9ade3df13c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1628152371231-936cf45eb8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://i.pinimg.com/736x/77/00/44/77004487bd4a27aba64a4fadce35732b.jpg",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1613570192443-0a4ccf3089f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1616137148650-4aa14651e02b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGhvbWUlMjBkZWNvcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1501183638710-841dd1904471?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG9tZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1648737966769-98fa88fe66bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1560440021-33f9b867899d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},

					{
						image_url:
							"https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1532323544230-7191fd51bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
			],
			[
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1595831004082-7d028af1387b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b3V0Zml0JTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1578982566793-8f278402007c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG91dGZpdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1616526038611-5af1bbdbcb21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG91dGZpdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1610093435756-efc1479e4774?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG91dGZpdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1579777104303-a19fbde9bd02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG91dGZpdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1599668946438-519e96061e60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG91dGZpdCUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1594140700405-f401ff47b29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwb3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1594140700405-f401ff47b29e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwb3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1595231712607-de506517831b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aW5kaWFuJTIwb3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1536243298747-ea8874136d64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwb3V0Zml0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1620730389810-9076d9dfff84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a3VydGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1620730389810-9076d9dfff84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8a3VydGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1628250521470-28c1fc54616c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8a3VydGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1597983073493-88cd35cf93b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a3VydGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1628250522274-dbd744b62692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1583392522789-3368b8e69102?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1620730389579-b01352638c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1620730389579-b01352638c3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1616879672490-c6d3a23d91f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1597983073453-ef06cfc2240e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},

					{
						image_url:
							"https://images.unsplash.com/photo-1570711723895-cb9489526f3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1602907021769-9f2eba51d061?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1534600425534-13056ef050cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1631002037638-90055c165649?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1631002036467-2c63ead2d491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDN8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1578178344914-ad1ad89043b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDl8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1605131545453-6044234368a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1618757850520-6e3e48d07746?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1630310585172-3a43c1cf0d2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1630310504261-fc44f719be87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1592023031338-ee30ef94abbc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGt1cnRhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
			],
			[
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1452860606245-08befc0ff44b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1574291814206-363acdf2aa79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1608752503578-52f35965e3d9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZGl5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1611844088399-dfac5dc474a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1605627079912-97c3810a11a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1615486363973-f79d875780cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1593456026564-60181acc2ca7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1567480503716-f72e1d9ffcf0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1609241394990-32f7b81111c1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1550433578-86d5ba0ea857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1611889531333-cf0c35c3f44e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTB8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1520550652-4d089104a001?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1607349722494-fb8f09e2a4e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1544376936-e15fd353d311?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzB8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1574582024662-2eb1394cd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODF8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1596014747514-39b15e0fb943?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODN8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1572265223084-9612f11e7990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
				[
					{
						image_url:
							"https://images.unsplash.com/photo-1572265223084-9612f11e7990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODV8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
					{
						image_url:
							"https://images.unsplash.com/photo-1576003606644-bf100418e4f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGRpeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
					},
				],
			],
		];
		setImageArray(pic_3d_array[index]);
		// console.log(pic_3d_array[0][1]);
		setText(text_arr[index]);
		return () => {
			resetTimeout();
		};
	}, [index]);
	let list1 = imageArray[0];
	let list2 = imageArray[1];
	let list3 = imageArray[2];
	let list4 = imageArray[3];
	let list5 = imageArray[4];
	let list6 = imageArray[5];
	let list7 = imageArray[6];
	
	return (
		<div>
			<div className="warn">
				<p>It’s a project for educational purpose only and not commercial purpose
               </p>
			</div>
			<nav>
				<div className="logo">
					<div className="img">
						<svg
							fill="#E60023"
							height="32"
							width="32"
							viewBox="0 0 24 24"
							aria-label="Pinterest logo"
							role="img"
						>
							<path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
						</svg>
						<span className="logo-text">Pinterest</span>
					</div>
				</div>
				<div className="right-side">
					<div className="link-list">
						<div className="link">
							<Link to="/about">About</Link>{" "}
						</div>
						<div className="link">
							<Link to="/business">Business</Link>{" "}
						</div>
						<div className="link">
							<Link to="/blog">Blog</Link>{" "}
						</div>
					</div>
					<div className="btn">
						<a href="#login">
							<Button>
								<div>Log in</div>
							</Button>
						</a>
					</div>
					<div className="btn">
						<Button signup>
							<div>Sign up</div>
						</Button>
					</div>
				</div>
			</nav>

			<div className="headline">
				<div className="heading">Get Your Next</div>
				<div className="slideshow">
					<div
						className="slideshowSlider"
						style={{ transform: `translate3D(${-index * 100}%, 0, 0)` }}
					>
						{colors.map((color, index) => (
							<div className="slide" style={{ color }} key={index}>
								{text}
							</div>
						))}
					</div>

					<div className="slideshowDots">
						{colors.map((_, idx) => (
							<div
								key={idx}
								className={`slideshowDot${
									index === idx && idx === 0
										? " first"
										: index === idx && idx === 1
										? " second"
										: index === idx && idx === 2
										? " third"
										: index === idx && idx === 3
										? " fourth"
										: ""
								}`}
								onClick={() => {
									setIndex(idx);
								}}
							></div>
						))}
					</div>
				</div>
			</div>
			<div id="homepage-grid">
				<Grid one>
					{list1.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid two>
					{list2.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid three>
					{list3.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid four>
					{list4.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid five>
					{list5.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid six>
					{list6.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid seven>
					{list7.map((item, index) => {
						return (
							<div className="fade" key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
			</div>
			<Faded>
				<a href="#login">
					<div class="pulse">
						<span class="pulse-button">
							<img src={down} alt="" />
						</span>
					</div>
				</a>
			</Faded>
			<Login />
		</div>
	);
};
