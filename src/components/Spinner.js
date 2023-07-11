import React from 'react';
import PropTypes from 'prop-types';
import { Spinner as BsSpinner } from 'react-bootstrap';

const Spinner = ({ show }) => {
	return (
		<div className="dogbreed-spinner" style={{ display: !show ? 'none' : 'flex' }}>
			<BsSpinner animation="border" role="status" variant="secondary" />
		</div>
	);
};

export default Spinner;

Spinner.propTypes = {
	show: PropTypes.bool.isRequired
};
