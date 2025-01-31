import React from 'react';
import './Loader.css';
import loaderVideo from '../assets/video/ssstwitter.com_1738109681852.mp4';

const Loader = ({ loading }) => {
	return (
		loading && (
			<div className="loader">
				<video className="loader-video" autoPlay loop muted>
					<source src={loaderVideo} type="video/mp4" />
					Your browser does not support the video tag.
				</video>
			</div>
		)
	);
};

export default Loader;
