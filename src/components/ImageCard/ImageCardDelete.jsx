import React from 'react';
import './ImageCard.css';
import more_icon from '../../img/more_icon.png';
import upload_icon from '../../img/upload_icon.png';
import whatsappnew from '../../img/whatsappnew.png';
import facebook_icon from '../../img/facebook_icon.png';
import twitter from '../../img/twitter.png';
import search_icon from '../../img/search_icon.png';
import gmail from '../../img/gmail.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { prevSavedImage } from '../../redux/user/action';
import { saveAs } from 'file-saver';
import constant from '../../constant';
import { useNavigate } from 'react-router-dom';
const ImageCardDelete = (props) => {
	const [share, setShare] = useState(false);
	const [modal, setModal] = useState(false);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const toggleShare = () => {
		setShare(!share);
	};
	const toggleModal = () => {
		setModal(!modal);
	};
	if (share) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}
	if (modal) {
		document.body.classList.add('active-modal');
	} else {
		document.body.classList.remove('active-modal');
	}
	function deletePost(id) {
		console.log(id);
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/save/?id=${id}`, {
			method: 'DELETE',
		})
			.then((res) => {
				res.json();
			})
			.then((res) => {
				console.log(res);
				alert('Image deleted successfully');
				window.location.reload();
			});
	}
	const downloadImage = () => {
		saveAs(props.image, 'image.jpg');
	};
	const whatsappShare = () => {
		window.open(`whatsapp://send?text=${props.image}?v=ohpCMpderow`);
	};
	const facebookShare = () => {
		window.open(`https://www.facebook.com/?imageurl=${props.image}`);
	};
	const twitterShare = () => {
		window.open(`https://twitter.com/?imageurl=${props.image}`);
	};
	return (
		<div>
			<div className='container'>
				<img src={props.image} alt='Snow' className='main_image' />
				<div className='top_right' onClick={() => deletePost(props.id)}>
					Delete
				</div>
				<div className='bottom_right'>
					<img src={upload_icon} alt='' onClick={toggleShare} />
					<img src={more_icon} alt='' onClick={toggleModal} />
				</div>
			</div>
			{share && (
				<div className='modal'>
					<div onClick={toggleShare} className='overlay'></div>
					<div className='modal-content'>
						<h2>Send this Pin</h2>
						<div className='social_container' onClick={whatsappShare}>
							<div>
								<img src={whatsappnew} alt='' />
								<p>WhatsApp</p>
							</div>
							<div onClick={facebookShare}>
								<img src={facebook_icon} alt='' />
								<p>Facebook</p>
							</div>
							<div>
								<img src={twitter} alt='' onClick={twitterShare} />
								<p>Twitter</p>
							</div>
							<div>
								<img src={gmail} alt='' />
								<p>Email</p>
							</div>
						</div>
						<div className='search_div'>
							<img src={search_icon} alt='' />
							<input type='text' name='' id='' placeholder='Name or Email' />
						</div>
						{/* 
            <button className="close-modal" onClick={toggleModal}>
              x
            </button> */}
					</div>
				</div>
			)}
			{modal && (
				<div className='modal'>
					<div onClick={toggleModal} className='overlay'></div>
					<div className='modal-content'>
						<p>This Pin was inspired by your recent activity</p>
						<div className='download_container'>
							<div>
								<h3>Hide Pin</h3>
							</div>
							{/* <a href={props.image} download  > */}
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
