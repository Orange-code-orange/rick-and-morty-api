import React, { useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';
import './ResidentCard.css';

function ResidentCard({ url }) {
	const { data: resident, pending, error, request } = useFetchApi();

	useEffect(() => {
		request(url);
	}, [url]);

	const status = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '⚫',
	};

	const episodesCount = resident?.episode.length;
	const countText = episodesCount > 1 ? 'Episodes' : 'Episode';

	return (
		<>
			{pending ? (
				<p>Cargando...</p>
			) : (
				resident && (
					<div className="resident-card">
						<div
							className="image-container"
							style={{
								backgroundImage: `url(${resident.image})`,
								backgroundSize: 'cover',
								backgroundPosition: 'center',
							}}
						>
							<span className="status">{`${status[resident.status]} ${
								resident.status
							}`}</span>
						</div>

						<div className="resident-info-container">
							<h3 className="resident-name">{resident.name}</h3>
							<ul className="resident-info">
								<li className="resident-info-item">
									Specie: <br />{' '}
									<span className="resident-item-response">
										{resident.species}
									</span>
								</li>
								<li className="resident-info-item">
									Origin: <br />{' '}
									<span className="resident-item-response">
										{resident.origin?.name}
									</span>
								</li>
								<li className="resident-info-item">
									Appears in: <br />
									<span className="resident-item-response">
										{episodesCount} {countText}
									</span>
								</li>
							</ul>
						</div>
					</div>
				)
			)}
		</>
	);
}

export default ResidentCard;
