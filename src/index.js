import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { About } from "./routes/About";
import { Business } from "./routes/Business";
import { Blog } from "./routes/Blog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { Error } from "./routes/Error";
import {store} from "./redux/store";
import PostPage from "./routes/PostPage"
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="about" element={<About />} />
				<Route path="business" element={<Business />} />
				<Route path="blog" element={<Blog />} />
				<Route path="*" element={<Error />} />
				<Route path='/pin/:prodId' element={<PostPage/>} />

			</Routes>
		</BrowserRouter>
	</Provider>,
	document.getElementById("root")
);
