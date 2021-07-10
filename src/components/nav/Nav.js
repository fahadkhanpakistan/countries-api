/** @format */
import { useState } from 'react';
import './nav.css';
import { IoIosMoon } from 'react-icons/io';
const Nav = ({ title }) => {
	const [isDarkMode, setIsDarkMode] = useState('dark-mode');
	return (
		<nav className={isDarkMode}>
			<h1 className={isDarkMode}>{title}</h1>
			<div>
				<IoIosMoon />
				Dark Mode
			</div>
		</nav>
	);
};

export default Nav;
