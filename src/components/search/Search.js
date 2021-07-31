/** @format */
import { IoIosSearch } from 'react-icons/io';
import './Search.css';
const Search = ({ countryName, onChangeCountryName, filterCountryList }) => {
	return (
		<section className='search-container'>
			<div className='search-input'>
				<IoIosSearch className='search-icon' />
				<input
					type='text'
					placeholder='Search for a country'
					value={countryName}
					onChange={onChangeCountryName}
				/>
			</div>
			<select className='filter-list' onChange={filterCountryList}>
				<option value='All'>Filter by Region</option>
				<option value='Africa'>Africa</option>
				<option value='Americas'>America</option>
				<option value='Asia'>Asia</option>
				<option value='Europe'>Europe</option>
				<option value='Oceania'>Oceania</option>
			</select>
		</section>
	);
};

export default Search;
