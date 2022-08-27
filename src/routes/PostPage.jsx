import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { addUserSavedImage, addTodo } from '../redux/user/action';
import more_icon from '../img/more_icon.png';
import upload_icon from '../img/upload_icon.png';
import right_up from '../img/right-up.png';
import copy from '../img/copy.png';
import scan from '../img/scan.png';
import down_arrow from '../img/down-arrow.png';
import icon_owner from '../img/icon_owner.jpg';
import '../components/ImageCard/ImageCard.css';
import '../css/PostPage.css';
import { Navbar } from '../components/Navbar/Navbar';
import { UserHomePage } from '../components/HomepageComponents/UserHomePage';
import { useSelector, useDispatch } from 'react-redux';
import constant from '../constant';
import { saveAs } from 'file-saver';
const PostPage = () => {
	const { prodId } = useParams();
	const [loggedUserData, setLoggedUserData] = useState({
		userName: '',
		userProfilePic: '',
	});
	const dispatch = useDispatch();
	const [save, setSave] = useState('Save');
	const [imageData, setImageData] = useState({
		uploadUser: '',
		imageUrl: '',
		imageName: '',
		imageDescription: '',
	});
	const [chat, setChat] = useState();
	const list_state = useSelector((state) => state.todoreducer.list);
	const fetchUserProfile = () => {
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/users/getUser`, {
			headers: {
				token: JSON.parse(localStorage.getItem('token')),
			},
		})
			.then((res) => res.json())
			.then((data) => {
				data = data.user;
				setLoggedUserData({
					userName: data.name,
					userProfilePic: data.avatar,
				});
			});
	};

	useEffect(() => {
		fetchUserProfile();
		fetch(
			`https://api.unsplash.com/photos/${prodId}/?client_id=Y7pKIMKs4x48WZ6qUcDpluSfjqr12Fnjh7sEIUYP-0g`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setImageData({
					uploadUser: res.user.name,
					imageUrl: res.urls.regular,
					imageName: res.description,
					imageDescription: res.description,
					total_photos: res.user.total_photos,
					profile_image: res.user.profile_image.medium,
					portfolio_url: res.user.links.html,
					users_biography: res.user.bio,
				});
				setSave(res[0].save_state);
			})
			.catch((err) => console.log(err));
	}, []);

	if (imageData === null) {
		return (
			<svg
				className='loader'
				fill='#E60023'
				height='32'
				width='32'
				viewBox='0 0 24 24'
				aria-label='Pinterest logo'
				role='img'
			>
				<path d='M0 12c0 5.123 3.211 9.497 7.73 11.218-.11-.937-.227-2.482.025-3.566.217-.932 1.401-5.938 1.401-5.938s-.357-.715-.357-1.774c0-1.66.962-2.9 2.161-2.9 1.02 0 1.512.765 1.512 1.682 0 1.025-.653 2.557-.99 3.978-.281 1.189.597 2.159 1.769 2.159 2.123 0 3.756-2.239 3.756-5.471 0-2.861-2.056-4.86-4.991-4.86-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.189-.332 1.355-.053.218-.173.265-.4.159-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.117-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12'></path>
			</svg>
		);
	} else if (imageData.length === 0) {
		return <h1>Product does not exist</h1>;
	}

	const handleSave = () => {
		let url = imageData.imageUrl;
		setSave('Saved');

		console.log(prodId);
		let user_id = JSON.parse(localStorage.getItem('userID'));
		let payload = {
			image_url: `${url}`,
			user_id: `${user_id}`,
			image_id: `${prodId}`,
		};
		fetch(`${process.env.REACT_APP_BACKEND_SERVER}/save`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify(payload),
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
		// document.querySelector(".save").innerText = "Saved";
	};

	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			dispatch(addTodo(chat), setChat(''));
		}
	};
	const copyImageUrlToClipboard = () => {
		navigator.clipboard.writeText(imageData.imageUrl);
	};
	const downloadImage = () => {
		saveAs(imageData.imageUrl, `${imageData.imageName}.jpg`);
	};
	return (
		<div>
			<div>
				<Navbar />
			</div>
			<div className='post_main'>
				<div className='post_middle'>
					<div className='post_left'>
						<div>
							<div className='container container2'>
								<img
									src={imageData.imageUrl}
									alt='Snow'
									className='main_image'
								/>
								<a href={imageData.imageUrl} target='_blank' rel='noreferrer'>
									<div className='bottom_left'>
										<img src={right_up} alt='' />
										<h3>View image</h3>
									</div>
								</a>
								<a href={imageData.imageUrl} target='_blank' rel='noreferrer'>
									<div className='bottom_right_new'>
										<img src={scan} alt='' />
									</div>
								</a>
							</div>
						</div>
					</div>
					<div className='post_right'>
						<div className='icon_collection'>
							<div className='icon_collection_left'>
								<img src={more_icon} alt='' />

								<img onClick={downloadImage} src={upload_icon} alt='' />

								<img onClick={copyImageUrlToClipboard} src={copy} alt='' />
							</div>
							<div className='icon_collection_rigth'>
								<div className='profile_collection'>
									<h4>Profile</h4>
									<img src={down_arrow} alt='' />
								</div>
								<div onClick={handleSave} className='save'>
									{save}
								</div>
							</div>
						</div>

						<div className='post_info'>
							<div className='owner_post'>
								<h3>Uploaded by</h3>
								<h3 className='owner_name'>{imageData.uploadUser}</h3>
							</div>

							<h1>{imageData.imageDescription}</h1>
							<p>{imageData.users_biography}</p>

							<div className='post_follow_section'>
								<div className='flex'>
									<div>
										<img
											src={imageData.profile_image}
											alt=''
											className='channel_image'
										/>
									</div>

									<div>
										<p>{imageData.uploadUser}</p>
										<p>{imageData.total_photos} Total Photos</p>
									</div>
								</div>
								<a
									href={imageData.portfolio_url}
									target='_blank'
									rel='noreferrer'
									style={{ textDecoration: 'none' }}
								>
									<div className='follow_div'>Follow</div>
								</a>
							</div>

							<div className='profile_collection'>
								<h4>Comments</h4>
								<img src={down_arrow} alt='' className='down_hover' />
							</div>
						</div>

						<div className='comments_section'>
							<p>Share feedback, ask a question or give a high five</p>

							<div className='commets_section2'>
								<div>
									<img
										src={loggedUserData.userProfilePic}
										alt=''
										className='channel_image2'
									/>
								</div>

								<div className='chat_input'>
									<input
										type='text'
										name=''
										id=''
										value={chat}
										onChange={(e) => setChat(e.target.value)}
										onKeyDown={handleKeyDown}
									/>
									<img src={loggedUserData.userProfilePic} alt='' />
								</div>
							</div>

							<div className='chat_main'>
								{list_state.map((ele) => {
									return (
										<div className='chatsub_div'>
											<img
												src={loggedUserData.userProfilePic}
												alt=''
												className='chaticon'
											/>
											<p>{ele.data}</p>
											<p>{loggedUserData.userName}</p>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>

				<div className='post_bottom'>
					<h3>More like this</h3>
					<UserHomePage />
				</div>
			</div>
		</div>
	);
};
export default PostPage;
