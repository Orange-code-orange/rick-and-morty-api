import { useEffect, useState } from 'react';
import useFetchApi from './hooks/useFetchApi';
import LocationCard from './components/LocationCard';
import ResidentsList from './components/ResidentsList';
import SearchForm from './components/SearchForm';
import { randomId } from './utils';
import './App.css';
import { logo } from './assets/images';

const baseUrl = 'https://rickandmortyapi.com/api';

function App() {
	const { data, pending, error, request } = useFetchApi();

	const [search, setSearch] = useState(randomId(126));

	useEffect(() => {
		request(`${baseUrl}/location/${search}`);
	}, [search]);

	// useEffect(() => {
	// 	console.log(data);
	// });

	return (
		<>
			<div className="app-container">
				<div className="app-background">
					<header className="app-header">
						<div className="logo-container">
							<img src={logo} alt="logo" className="logo-img" />
							<h2 className="logo-subtitle">WIKI</h2>
						</div>
						<SearchForm setSearch={setSearch} />
					</header>
				</div>
				{pending ? <p>Loading...</p> : data && <LocationCard location={data} />}
				<main className="main-container">
					<div className="cards-container">
						<ResidentsList residents={data?.residents} />
					</div>
				</main>
			</div>
		</>
	);
}

export default App;
