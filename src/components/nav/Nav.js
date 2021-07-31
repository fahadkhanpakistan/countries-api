/** @format */
import './nav.css';
// import { IoIosMoon } from 'react-icons/io';
const Nav = ({ title, isDarkMode, handleDarkMode }) => {
	return (
		<nav className='nav'>
			<h1>{title}</h1>
			{/* <div className={isDarkMode ? 'dark-mode' : 'light-mode'} onClick={handleDarkMode}>
				<IoIosMoon />
				Dark Mode
			</div> */}
		</nav>
	);
};

export default Nav;
