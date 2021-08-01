/** @format */
import './Country.css';
import { Link } from 'react-router-dom';
const Country = ({ country, fetchBorderCountry }) => {
	if (country.length > 0)
		return (
			<section className='country-container'>
				<Link to='/countries-api'>
					<button className='back-btn'>Back</button>
				</Link>
				{country.map(
					({
						flag,
						name,
						capital,
						region,
						population,
						currencies,
						languages,
						nativeName,
						topLevelDomain,
						subregion,
						borders,
					}) => (
						<article key={capital} className='country'>
							<img src={flag} alt='Country Flag' />
							<div className='country-info'>
								<h1 className='title'>{name}</h1>
								<div className='flex-info'>
									<p>
										<b>Native Name: </b>
										{nativeName}
									</p>
									<p>
										<b>Population: </b>
										{population}
									</p>
									<p>
										<b>Region: </b>
										{region}
									</p>
									<p>
										<b>Sub Region: </b>
										{subregion}
									</p>

									<p>
										<b>Capital: </b>
										{capital}
									</p>
									<p>
										<b>Top Level Domain: </b>
										{topLevelDomain}
									</p>
									<p>
										<b>Currencies: </b>
										{currencies[0].name}
									</p>
									<p>
										<b>Languages: </b>
										{languages.map((lan) => lan.name).join(', ')}
									</p>
								</div>
								<p className='border-countries'>
									<b>Border Countries: </b>
									{borders.map((c) => (
										<button key={c} className='border-btn' onClick={() => fetchBorderCountry(c)}>
											{c}
										</button>
									))}
								</p>
							</div>
						</article>
					)
				)}
			</section>
		);
	return null;
};

export default Country;
