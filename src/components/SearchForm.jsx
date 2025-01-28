import React, { useRef } from 'react';

function SearchForm({ setSearch }) {
	const inputRef = useRef();

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type="text" />
				<button>Search</button>
			</form>
		</div>
	);
}

export default SearchForm;
