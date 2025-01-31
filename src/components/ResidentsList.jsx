import React from 'react';
import ResidentCard from './ResidentCard';

function ResidentsList({ residents }) {
	const styles = {
		positiom: 'relative',
		color: 'white',
		fontSize: '50px',
		textAlign: 'center',
		gridColumn: '1 / -1',
	};
	return (
		<>
			{residents?.length > 0 ? (
				<>
					{residents.map((resident) => (
						<ResidentCard key={resident} url={resident} />
					))}
				</>
			) : (
				<p style={styles}>No hay residentes</p>
			)}
		</>
	);
}

export default ResidentsList;
