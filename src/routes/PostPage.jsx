import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { User_HomePage } from "./User_HomePage";
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

const PostPage = () => {
	const { prodId } = useParams();
	const [details, setDetails] = useState(null);
	let image_url =
		"https://i.pinimg.com/236x/26/21/df/2621df15c7d12b5cac85517887e8eca9.jpg";

	let owner = "mangesh pandit";
	useEffect(() => {
		fetch(`https://simple-json-db.herokuapp.com/posts?id=${prodId}`)
			.then((res) => res.json())
			.then((res) => setDetails(res))
			.catch((err) => console.log(err));
	}, []);

	if (details === null) {
		return <h1>...Loading Data</h1>;
	} else if (details.length === 0) {
		return <h1>Product does not exist</h1>;
	}

	const handleSave = () => {
		let payload = {
			img_url: `${image_url}`,
			liked: false,
		};

		fetch(`https://simple-json-db.herokuapp.com/saved_image`, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((res) => console.log(res));
		document.querySelector(".save").innerText = "Saved";
	};

	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className="post_main">
				<div className="post_middle">
					<div className="post_left">
						<div className="container container2">
							<img src={image_url} alt="Snow" className="main_image" />
							<div className="bottom_left">
								<img src={right_up} alt="" />
								<h3>View image</h3>
							</div>
							<div className="bottom_right_new">
								<img src={scan} alt="" />
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
									Save
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
									<input type="text" name="" id="" />
									<img src={icon_owner} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="post_bottom">
					<h3>More like this</h3>
					<User_HomePage />
				</div>
			</div>
		</div>
	);
};
export default PostPage;
