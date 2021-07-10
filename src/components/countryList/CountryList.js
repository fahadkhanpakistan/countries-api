/** @format */
import './CountryList.css';
import { Link } from 'react-router-dom';
const CountryList = ({ data, clickCountry }) => {
	return (
		<ul>
			{data.map(
				({
					name,
					flag,
					population,
					region,
					capital,
				}) => (
					<Link to='/country'>
						<li
							key={name}
							onClick={() =>
								clickCountry(name)
							}>
							<img
								src={flag}
								alt='Country Flag'
							/>
							<h1>{name}</h1>
							<p>
								<span>Population:</span>{' '}
								{population}
							</p>
							<p>
								<span>Region:</span>{' '}
								{region}
							</p>
							<p>
								<span>Capital:</span>{' '}
								{capital}
							</p>
						</li>
					</Link>
				)
			)}
		</ul>
	);
};

export default CountryList;
