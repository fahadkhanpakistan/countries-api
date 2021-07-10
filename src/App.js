/** @format */

import { Fragment, useEffect, useState } from 'react';
import Nav from './components/nav/Nav';
import './App.css';
import Search from './components/search/Search';
import CountryList from './components/countryList/CountryList';
import Country from './components/country/Country';
import axios from 'axios';
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom';
const App = () => {
	const [data, setData] = useState([]);
	const [country, getCountry] = useState('');
	const [countryName, setCountryName] = useState('');
	useEffect(() => {
		axios.get('https://restcountries.eu/rest/v2/all').then(
			(data) => setData(data.data)
		);
	}, []);
	// Methods!!!
	const clickCountry = async (countryName) => {
		let data = await axios
			.get(
				`https://restcountries.eu/rest/v2/name/${countryName}`
			)
			.then((res) => res);
		getCountry(data.data);
	};
	//Seacrh Method!
	const onChangeCountryName = async (e) => {
		setCountryName(e.target.value);
		let data = await axios
			.get(
				`https://restcountries.eu/rest/v2/name/${countryName}`
			)
			.then((res) => res);
		setData(data.data);
	};
	return (
		<Fragment>
			<header className='header'>
				<Nav title='Where in the world?' />
			</header>
			<section>
				<div>
					<Search
						countryName={countryName}
						onChangeCountryName={
							onChangeCountryName
						}
					/>
					Total Countries: {data.length}
					<Router>
						<Switch>
							<Route path='/country'>
								<Country
									country={country}
								/>
							</Route>
							<Route
								exact
								path='/rest-countries-api-with-color-theme-switcher-master'>
								<CountryList
									data={data}
									clickCountry={
										clickCountry
									}
								/>
							</Route>
						</Switch>
					</Router>
				</div>
			</section>
		</Fragment>
	);
};

export default App;
