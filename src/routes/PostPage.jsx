import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { addUserSavedImage, addTodo } from "../redux/user/action";
import more_icon from "../img/more_icon.png";
import upload_icon from "../img/upload_icon.png";
import right_up from "../img/right-up.png";
import copy from "../img/copy.png";
import scan from "../img/scan.png";
import down_arrow from "../img/down-arrow.png";
import icon_owner from "../img/icon_owner.jpg";
import "../components/ImageCard/ImageCard.css";
import "../css/PostPage.css";
import { Navbar } from "../components/Navbar/Navbar";
import { UserHomePage } from "../components/HomepageComponents/UserHomePage";
import { useSelector, useDispatch } from "react-redux";
import constant from "../constant";

const PostPage = () => {
	const { prodId } = useParams();
	const [details, setDetails] = useState(null);
	const dispatch = useDispatch();
	const [save, setSave] = useState("Save");

	const [chat, setChat] = useState();
	const list_state = useSelector((state) => state.todoreducer.list);

	let owner = "mangesh pandit";
	useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/${prodId}/download/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g`
		)
			.then((res) => res.json())
			.then((res) => {
				setDetails(res);
				setSave(res[0].save_state);
			})
			.catch((err) => console.log(err));
	}, []);

	if (details === null) {
		return (
			<svg
				className="loader"
				fill="#E60023"
				height="32"
				width="32"
				viewBox="0 0 24 24"
				aria-label="Pinterest logo"
				role="img"
			>
				<path d="M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12"></path>
			</svg>
		);
	} else if (details.length === 0) {
		return <h1>Product does not exist</h1>;
	}

	const handleSave = () => {
		let url = details.url;
		setSave("Saved");

		console.log(prodId);
		let user_id = JSON.parse(localStorage.getItem("userID"));
		let payload = {
			image_url: `${url}`,
			user_id: `${user_id}`,
			image_id: `${prodId}`,
		};
		fetch(`${constant.API_URL}/save`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
		// document.querySelector(".save").innerText = "Saved";
	};

	const handleKeyDown = (event) => {
		if (event.key === "Enter") {
			dispatch(addTodo(chat), setChat(""));
		}
	};

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="post_main">
				<div className="post_middle">
					<div className="post_left">
						<div>
							<div className="container container2">
								<img src={details.url} alt="Snow" className="main_image" />

								<div className="bottom_left">
									<img src={right_up} alt="" />
									<h3>View image</h3>
								</div>
								<div className="bottom_right_new">
									<img src={scan} alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="post_right">
						<div className="icon_collection">
							<div className="icon_collection_left">
								<img src={more_icon} alt="" />
								<img src={upload_icon} alt="" />
								<img src={copy} alt="" />
							</div>
							<div className="icon_collection_rigth">
								<div className="profile_collection">
									<h4>Profile</h4>
									<img src={down_arrow} alt="" />
								</div>
								<div onClick={handleSave} className="save">
									{save}
								</div>
							</div>
						</div>

						<div className="post_info">
							<div className="owner_post">
								<h3>Uploaded by</h3>
								<h3 className="owner_name">{owner}</h3>
							</div>

							<h1>Smile High</h1>
							<p>
								For “Smile High” we teamed up to create some art for a good
								cause. The folks over at wesmilehigh.com are printing posters
								with all profits being donated to Leuchaemia and Lymphoma
								Research.The claim is brought to life with an colorful
								installation of l…
							</p>

							<div className="post_follow_section">
								<div className="flex">
									<div>
										<img src={icon_owner} alt="" className="channel_image" />
									</div>

									<div>
										<p>life titam</p>
										<p>54 followers</p>
									</div>
								</div>
								<div className="follow_div">Follow</div>
							</div>

							<div className="profile_collection">
								<h4>Comments</h4>
								<img src={down_arrow} alt="" className="down_hover" />
							</div>
						</div>

						<div className="comments_section">
							<p>Share feedback, ask a question or give a high five</p>

							<div className="commets_section2">
								<div>
									<img src={icon_owner} alt="" className="channel_image2" />
								</div>

								<div className="chat_input">
									<input
										type="text"
										name=""
										id=""
										value={chat}
										onChange={(e) => setChat(e.target.value)}
										onKeyDown={handleKeyDown}
									/>
									<img src={icon_owner} alt="" />
								</div>
							</div>

							<div className="chat_main">
								{list_state.map((ele) => {
									return (
										<div className="chatsub_div">
											<img src={icon_owner} alt="" className="chaticon" />
											<p>{ele.data}</p>
											<p>Sarvesh Mishra</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className="post_bottom">
					<h3>More like this</h3>
					<UserHomePage />
				</div>
			</div>
		</div>
	);
};
export default PostPage;
