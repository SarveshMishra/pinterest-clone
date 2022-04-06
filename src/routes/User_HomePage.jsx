// User Homepage After Login
import ImageCard from "../components/ImageCard/ImageCard";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { isLogIn } from "../redux/global_data/action";
import { addUserData } from "../redux/user/action";
import "../css/user_homepage.css";
import { Navbar } from "../components/Navbar/Navbar";
export const User_HomePage = () => {
	const dispatch = useDispatch();
	const userData = useDispatch();
	useEffect(() => {
		fetchUserProfile();
	}, []);
	const fetchUserProfile = () => {
		fetch(
			`https://simple-json-db.herokuapp.com/users?id=${localStorage.getItem(
				"userID"
			)}`
		)
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				dispatch(isLogIn(true));
				userData(addUserData(data));
			});
	};
	var list1 = [
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
				"https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
		},
	];

	var list2 = [
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/1e/b9/b9/1eb9b99f28502d3d4185390e997e8eb4.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/8a/e2/b1/8ae2b1f094af8f87438fa952678620d3.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
		},
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
				"https://i.pinimg.com/236x/81/df/69/81df699b25ca1242a796f51397263d1a.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
		},
		{
			image_url:
				"https://i.pinimg.com/236x/86/5a/62/865a62ce02bb38bd88851269a41959d1.jpg",
		},
	];

  return (
	  <div>
	  <div><Navbar/></div>
    <div className="home_page_container">
    <div>
       {
          list1.map((ele)=>{
          return <ImageCard image={ele.image_url} id={1}/>
          })
        }
    </div>
    <div>
       {
          list2.map((ele)=>{
          return <ImageCard image={ele.image_url} id={1} />
          })
        }
    </div>
    <div>
       {
          list1.map((ele)=>{
          return <ImageCard image={ele.image_url} id={1}/>
          })
        }
    </div>
    <div>
       {
          list2.map((ele)=>{
          return <ImageCard image={ele.image_url} id={1}/>
          })
        }
    </div>
    <div>
       {
          list1.map((ele)=>{
          return <ImageCard image={ele.image_url} id={1}/>
          })
        }
    </div>
     
     
    </div>
	  </div>
   
  )
}
 