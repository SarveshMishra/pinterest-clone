import React from "react";
import "./ImageCard.css";
import more_icon from "../../img/more_icon.png";
import upload_icon from "../../img/upload_icon.png";
import whatsappnew from "../../img/whatsappnew.png";
import facebook_icon from "../../img/facebook_icon.png";
import twitter from "../../img/twitter.png";
import search_icon from "../../img/search_icon.png";
import gmail from "../../img/gmail.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { prevSavedImage } from "../../redux/user/action";
import { saveAs } from 'file-saver'

 
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

	const downloadImage = () => {
		saveAs(probs.image, 'image.jpg') // Put your image url here.
		//window.open('https://web.whatsapp.com://send?text=This is whatsapp sharing example using button')  
	 //   window.open(`facebook://send?text=${probs.image}?v=ohpCMpderow`);  

	}

	const whatsappShare=()=>{
	    window.open(`whatsapp://send?text=${probs.image}?v=ohpCMpderow`);  
 	}

	const facebookShare=()=>{
	    window.open(`https://www.facebook.com/?imageurl=${probs.image}`);
	}
	const twitterShare=()=>{
	    window.open(`https://twitter.com/?imageurl=${probs.image}`);
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
						<div className="social_container" onClick={whatsappShare}>
							<div>
								<img src={whatsappnew} alt="" />
								<p>WhatsApp</p>
							</div>

							<div onClick={facebookShare}>
								<img src={facebook_icon} alt="" />
								<p>Facebook</p>
							</div>

							<div>
								<img src={twitter} alt="" onClick={twitterShare} />
								<p>Twitter</p>
							</div>

							<div>
								<img src={gmail} alt="" />
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
							{/* <a href={probs.image} download  > */}
							<div onClick={downloadImage}>
								<h3>Download image</h3>
							</div>
							{/* </a> */}
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
