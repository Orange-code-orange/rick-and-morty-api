import React, { useRef, useState } from 'react';

function SearchForm({ setSearch }) {
	const inputRef = useRef();
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = +inputRef.current.value.trim();

		if (!value) {
			setError('Please enter a valid ID');
			return;
		}
		console.log('done');
		setSearch(inputRef.current.value);
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" ref={inputRef} placeholder="Enter a location ID" />
				<button>Search</button>
				{error && <p>{error}</p>}
			</form>
		</div>
	);
}

export default SearchForm;
