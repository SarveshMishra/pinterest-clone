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
		setText(text_arr[index]);
		return () => {
			resetTimeout();
		};
	}, [index]);

	return (
		<div>
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
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid two>
					{list2.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid three>
					{list3.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid four>
					{list4.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid five>
					{list5.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid six>
					{list6.map((item, index) => {
						return (
							<div key={index}>
								<img src={item.image_url} alt="" />
							</div>
						);
					})}
				</Grid>
				<Grid seven>
					{list7.map((item, index) => {
						return (
							<div key={index}>
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
