import React, { useEffect } from 'react';
import useFetchApi from '../hooks/useFetchApi';

function ResidentCard({ url }) {
	const { data: resident, pending, error, request } = useFetchApi();

	useEffect(() => {
		request(url);
	}, [url]);

	// useEffect(() => {
	// 	console.log(resident);
	// }, [resident]);

	const status = {
		Alive: '🟢',
		Dead: '🔴',
		unknown: '⚫',
	};

	const episodesCount = resident?.episode.length;
	const countText = episodesCount > 1 ? 'Episodes' : 'Episode';

	return (
		<div>
			{pending ? (
				<p>Cargando...</p>
			) : (
				resident && (
					<>
						<div>
							<img src={resident.image} alt="" width={250} />
							<span>{`${status[resident.status]} ${resident.status}`}</span>
						</div>
						<div>
							<h3>{resident.name}</h3>
							<ul>
								<li>
									Specie: <span>{resident.species}</span>
								</li>
								<li>
									Origin: <span>{resident.origin?.name}</span>
								</li>
								<li>
									Eppisodes where appear:{' '}
									<span>
										{episodesCount} {countText}
									</span>
								</li>
							</ul>
						</div>
					</>
				)
			)}
		</div>
	);
}

export default ResidentCard;
