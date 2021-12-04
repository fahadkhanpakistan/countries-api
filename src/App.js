/** @format */

import { useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import './App.css';
import CountryList from './components/countryList/CountryList';
import Country from './components/country/Country';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
	const [data, setData] = useState([]);
	const [country, getCountry] = useState('');
	const [countryName, setCountryName] = useState('');
	const [filteredCountryList, setFilteredCountryList] = useState([]);
	const [isDarkMode, setIsDarkMode] = useState(true);

	useEffect(() => {
		axios.get('https://restcountries.com/v2/all').then(data => {
			setData(data.data);
			setFilteredCountryList(data.data);
		});
	}, []);

	// Methods!!!
	const clickCountry = async countryName => {
		let data = await axios
			.get(
				`
https://restcountries.com/v2/name/${countryName}`
			)
			.then(res => res);
		getCountry(data.data);
	};
	//Seacrh Method!
	const onChangeCountryName = async e => {
		setCountryName(e.target.value);
		let data = await axios
			.get(`https://restcountries.com/v2/name/${countryName}`)
			.then(res => res);
		setFilteredCountryList(data.data);
	};
	//fetch border country
	const fetchBorderCountry = borderCountryName => {
		let temp = data.filter(name => name.alpha3Code === borderCountryName);
		getCountry(temp);
	};
	//filter country
	const filterCountryList = e => {
		if (e.target.value === 'All') {
			return setFilteredCountryList(data);
		}
		let filteredList = data.filter(
			country => country.region === e.target.value
		);
		setFilteredCountryList(filteredList);
	};
	//handle dark mode
	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};
	return (
		<article className='app-container'>
			<header className='header'>
				<Nav
					title='Where in the world?'
					isDarkMode={isDarkMode}
					handleDarkMode={handleDarkMode}
				/>
			</header>
			<section className='countryList-container'>
				<Router>
					<Switch>
						<Route path='/country'>
							<Country
								country={country}
								fetchBorderCountry={fetchBorderCountry}
							/>
						</Route>
						<Route exact path='/countries-api'>
							<CountryList
								filteredCountryList={filteredCountryList}
								clickCountry={clickCountry}
								countryName={countryName}
								onChangeCountryName={onChangeCountryName}
								filterCountryList={filterCountryList}
							/>
						</Route>
					</Switch>
				</Router>
			</section>
		</article>
	);
};

export default App;
