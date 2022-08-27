import { useSelector } from 'react-redux';
import { Homepage } from './routes/Homepage';
import { User_HomePage } from './routes/User_HomePage';
function App() {
	const isLogIn = useSelector((state) => state.global.isLogIn);
	if (localStorage.getItem('isLogIn') === null) {
		localStorage.setItem('isLogIn', 'false');
	}
	let login_status;
	if (localStorage.getItem('isLogIn') === 'true' || isLogIn === 'true') {
		login_status = 'true';
	} else {
		login_status = 'false';
	}
	// console.log(isLogIn);
	return login_status === 'true' ? <User_HomePage /> : <Homepage />;
}
export default App;
