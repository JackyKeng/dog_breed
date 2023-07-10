import React, { useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';

const CustomImage = ({ url, width, height, alt }) => {
	const [isLoading, setIsLoading] = useState(true);
	return (
		<div className="img-wrapper">
			{isLoading && <Spinner />}
			<Image
				src={url}
				alt={alt}
				onLoad={() => setIsLoading(false)}
				style={{
					maxWidth: '100%',
					maxHeight: '100%',
					boxShadow: '1px 1px 10px 0px rgba(0,0,0,0.75)'
				}}
			/>
		</div>
	);
};

export default CustomImage;
