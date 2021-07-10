/** @format */
import './Country.css';
import { Link } from 'react-router-dom';
const Country = (props) => {
	if (props.country.length > 0)
		return (
			<section>
				{props.country.map(
					({
						flag,
						name,
						capital,
						region,
						population,
					}) => (
						<article key={name}>
							<img
								src={flag}
								alt='Country Flag'
							/>
							<h2>{name}</h2>
							<p>{capital}</p>
							<p>{region}</p>
							<p>{population}</p>
						</article>
					)
				)}
				<Link to='/'>
					<button>Back</button>
				</Link>
			</section>
		);
	return null;
};

export default Country;
