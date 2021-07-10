/** @format */
import { IoIosSearch } from 'react-icons/io';
import './Search.css';
const Search = ({ countryName, onChangeCountryName }) => {
	return (
		<div className='search-container'>
			<IoIosSearch className='search-icon' />
			<input
				type='text'
				placeholder='Search for a country'
				value={countryName}
				onChange={onChangeCountryName}
			/>
		</div>
	);
};

export default Search;
