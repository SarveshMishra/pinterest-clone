import styled from "styled-components";

export const UserProfileWrapper = styled.div`
  margin: 0px;
  margin-top: 2%;
  font-family: "Segoe UI", Arial, sans-serif;
`;

export const ProfileContainer = styled.div`
//   background-color: red;
  // padding: 0px 20%;
  margin: 0px 32%;
`;

export const Img_div = styled.div`
// background-color : yellow;
height: 24%;
width : 24%;
padding: 0px auto;
text-align: center;
margin: 0px auto;
border-radius : 50px;
`

export const Name = styled.h1`
text-align: center;
font-weight: 750;
margin-top : 6%;
`
export const Img = styled.img`
height: 100%;
width : 100%;
border-radius : 500px;`

export const User_Name = styled.div`
font-size : 100%;
color: #8C76A2;
text-align: center;
margin: auto;
margin-top: 2%;
`;

export const Following = styled.div`
text-align:center;
margin-top: 2%;
color : #78727d;
`

export const Button_wrapper = styled.div`
margin-top : 3%;
`
export const Share_button = styled.button`
height : 2.5rem;
width : 14%;
margin-left: 30%;
border : none;
font-size : 98%;
font-weight : 600;
border-radius : 50px;
background-color : #eeebf0;
`
export const Edit_button = styled.button`
height : 2.5rem;
width : 20%;
margin-left : 8%;
border : none;
font-size : 98%;
font-weight : 600;
border-radius : 50px;
background-color : #eeebf0;
`
export const Create_button = styled.button`
height : 2.5rem;
width : 14%;
margin-left: 35%;
border : none;
font-size : 98%;
font-weight : 600;
backgroung-color :none;
margin-top : 3%

`
export const Saved_button = styled.button`
height : 2.5rem;
width : auto;
margin-left : 3%;
border : none;
font-size : 98%;
font-weight : 600;
backgroung-color :none;
margin-top : 3%;
`

export const Image_card = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
padding: 10px;
column-gap: 20px;
padding-left: 300px;
margin-top: 80px;
img{
  border-radius : 30px
  
}
`