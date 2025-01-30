import React, { useRef, useState } from 'react';
import './SearchForm.css';

function SearchForm({ setSearch }) {
	const inputRef = useRef();
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = +inputRef.current.value.trim();
		console.log(value);

		setError('');

		if (!value) {
			setError('Please enter a valid ID');
			return;
		} else if (isNaN(value)) {
			setError('Please enter a valid number');
			return;
		} else if (value < 1 || value > 126) {
			setError('You must provide a number between 1 and 126');
			return;
		}

		console.log('done');
		setSearch(value);
		inputRef.current.value = '';
	};
	return (
		<div className="search-form">
			<form onSubmit={handleSubmit}>
				<input
					className="search-input"
					type="text"
					ref={inputRef}
					placeholder="Enter a location ID"
				/>
				<button className="search-button">Search</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
}

export default SearchForm;
