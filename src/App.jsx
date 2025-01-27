import { useEffect, useState } from 'react';
import useFetchApi from './hooks/useFetchApi';
import LocationCard from './components/LocationCard';
import ResidentsList from './components/ResidentsList';
import SearchForm from './components/SearchForm';

const baseUrl = 'https://rickandmortyapi.com/api';

function App() {
	const { data, pending, error, request } = useFetchApi();

	const [search, setSearch] = useState(3);

	useEffect(() => {
		const randomLocationId = Math.floor(Math.random() * 126) + 1;
		request(`${baseUrl}/location/${randomLocationId}`);
	}, []);

	// useEffect(() => {
	// 	console.log(data);
	// });

	return (
		<div>
			<h2>Rick And Morty</h2>
			<SearchForm setSearch={setSearch} />
			{pending ? <p>Loading...</p> : data && <LocationCard location={data} />}
			<ResidentsList residents={data?.residents} />
		</div>
	);
}

export default App;
