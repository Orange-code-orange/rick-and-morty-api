import React from 'react';

function LocationCard({ location }) {
	const populationCount = location?.residents?.length;
	const countText = populationCount === 1 ? 'Resident' : 'residents';

	return (
		<div>
			<h2>{location?.name}</h2>
			<ul>
				<li>
					Type: <span>{location?.type}</span>
				</li>
				<li>
					Dimension: <span>{location?.dimension}</span>
				</li>
				<li>
					Population:{' '}
					<span>
						{populationCount} {countText}
					</span>
				</li>
			</ul>
		</div>
	);
}

export default LocationCard;
