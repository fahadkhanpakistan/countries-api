/** @format */
import './CountryList.css';
import Search from '../search/Search';
import { Link } from 'react-router-dom';
const CountryList = ({
	filteredCountryList,
	clickCountry,
	countryName,
	onChangeCountryName,
	filterCountryList,
}) => {
	return (
		<section className='country-list'>
			<Search
				countryName={countryName}
				onChangeCountryName={onChangeCountryName}
				filterCountryList={filterCountryList}
			/>
			<ul>
				{filteredCountryList.map(({ name, flag, population, region, capital }) => (
					<Link key={name} to='/country'>
						<li key={name} onClick={() => clickCountry(name)} className='item'>
							<img src={flag} alt='Country Flag' />
							<h1>{name}</h1>
							<p>
								<span>Population:</span> {population}
							</p>
							<p>
								<span>Region:</span> {region}
							</p>
							<p>
								<span>Capital:</span> {capital}
							</p>
						</li>
					</Link>
				))}
			</ul>
		</section>
	);
};

export default CountryList;
