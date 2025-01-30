import React from 'react';
import './LocationCard.css';

function LocationCard({ location }) {
	const populationCount = location?.residents?.length;
	const countText = populationCount === 1 ? 'Resident' : 'residents';
	const locationId = location.id.toString().padStart(3, '0');

	return (
		<div className="location-card">
			<h2 className="location-name">
				{location?.name} #{locationId}
			</h2>
			<ul className="location-info">
				<li className="location-info-item">
					Type: <br /> <span className="item-response">{location?.type}</span>
				</li>
				<li className="location-info-item">
					Dimension: <br />
					<span className="item-response">{location?.dimension}</span>
				</li>
				<li className="location-info-item">
					Population: <br />
					<span className="item-response">
						{populationCount} {countText}
					</span>
				</li>
			</ul>
		</div>
	);
}

export default LocationCard;
