import { useSelector } from "react-redux";
import { Homepage } from "./routes/Homepage";
import { User_HomePage } from "./routes/User_HomePage";
function App() {
	const isLogIn = useSelector((state) => state.global.isLogIn);
	console.log(isLogIn);
	return isLogIn === "true" ? (
		<>
			<User_HomePage />
		</>
	) : (
		<>
			<Homepage />
		</>
	);
}

export default App;
