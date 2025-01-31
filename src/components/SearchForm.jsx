import React, { useRef, useState } from 'react';
import './SearchForm.css';

function SearchForm({ setSearch }) {
	const inputRef = useRef();
	const [error, setError] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = +inputRef.current.value.trim();

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

		setSearch(value);
		inputRef.current.value = '';
	};
	return (
		<div className="form-container">
			<form onSubmit={handleSubmit} className="search-form">
				<input
					className="search-input"
					type="text"
					ref={inputRef}
					placeholder="Enter a location ID"
				/>
				<button className="search-button">Search</button>
				{error && (
					<p
						style={{
							paddingLeft: '5px',
							color: '#ffffff',
							fontSize: '13px',
							marginTop: '0.5rem',
							filter: 'drop-shadow(0px 0px 3px rgba(255, 0, 0, 0.79))',
						}}
					>
						{error}
					</p>
				)}
			</form>
		</div>
	);
}

export default SearchForm;
