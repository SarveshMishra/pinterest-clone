import React from "react";
import "./ImageCard.css";
import more_icon from "../../img/more_icon.png";
import upload_icon from "../../img/upload_icon.png";
import whatsapp_icon from "../../img/whatsapp_icon.png";
import facebook_icon from "../../img/facebook_icon.png";
import search_icon from "../../img/search_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { prevSavedImage } from "../../redux/user/action";
const ImageCardDelete = (probs) => {
	const [share, setShare] = useState(false);
	const [modal, setModal] = useState(false);

	const dispatch = useDispatch();

	const toggleShare = () => {
		setShare(!share);
	};

	const toggleModal = () => {
		setModal(!modal);
	};

	if (share) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	if (modal) {
		document.body.classList.add("active-modal");
	} else {
		document.body.classList.remove("active-modal");
	}

	function deletePost(id) {
		
		fetch("https://simple-json-db.herokuapp.com/saved_image" + "/" + id, {
			method: "DELETE",
		})
			.then(() => {
				console.log("removed");
			})
			.catch((err) => {
				console.error(err);
			});

		fetch(`https://simple-json-db.herokuapp.com/saved_image`)
			.then((res) => res.json())
			.then((data) => {
				dispatch(prevSavedImage(data));
			});
		let patchPayload = {
			save_state: "Save",
		};
		
	}

	return (
		<div>
			<div className="container">
				<img src={probs.image} alt="Snow" className="main_image" />
				{/* <Link to={`/pin/${probs.id}`}> */}
				<div className="top_right" onClick={() => deletePost(probs.id)}>
					Delete
				</div>
				{/* </Link> */}
				<div className="bottom_right">
					<img src={upload_icon} alt="" onClick={toggleShare} />
					<img src={more_icon} alt="" onClick={toggleModal} />
				</div>
			</div>

			{share && (
				<div className="modal">
					<div onClick={toggleShare} className="overlay"></div>
					<div className="modal-content">
						<h2>Send this Pin</h2>
						<div className="social_container">
							<div>
								<img src={facebook_icon} alt="" />
								<p>WhatsApp</p>
							</div>

							<div>
								<img src={facebook_icon} alt="" />
								<p>Facebook</p>
							</div>

							<div>
								<img src={facebook_icon} alt="" />
								<p>Twitter</p>
							</div>

							<div>
								<img src={facebook_icon} alt="" />
								<p>Email</p>
							</div>

							<div>
								<img src={facebook_icon} alt="" />
								<p>Email</p>
							</div>
						</div>

						<div className="search_div">
							<img src={search_icon} alt="" />
							<input type="text" name="" id="" placeholder="Name or Email" />
						</div>
						{/* 
            <button className="close-modal" onClick={toggleModal}>
              x
            </button> */}
					</div>
				</div>
			)}

			{modal && (
				<div className="modal">
					<div onClick={toggleModal} className="overlay"></div>

					<div className="modal-content">
						<p>This Pin was inspired by your recent activity</p>
						<div className="download_container">
							<div>
								<h3>Hide Pin</h3>
							</div>

							<div>
								<h3>Download image</h3>
							</div>

							<div>
								<h3>Report Pin</h3>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ImageCardDelete;
