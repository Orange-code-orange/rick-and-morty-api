import React from 'react';
import ResidentCard from './ResidentCard';

function ResidentsList({ residents }) {
	return (
		<>
			{residents?.length > 0 ? (
				<>
					{residents.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
				</>
			) : (
				<p>No hay residentes</p>
			)}
		</>
	);
}

export default ResidentsList;
