import React from 'react';
import ResidentCard from './ResidentCard';

function ResidentsList({ residents }) {
	return (
		<div>
			{residents?.length > 0 ? (
				<>
					{residents.map((resident) => (
						<ResidentCard url={resident} />
					))}
				</>
			) : (
				<p>No hay residentes</p>
			)}
		</div>
	);
}

export default ResidentsList;
