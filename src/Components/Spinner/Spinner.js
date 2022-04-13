import React from 'react';
import { Triangle } from 'react-loader-spinner';

const spinnerStyle = {
	position: "absolute",
	top: "50%",
	width: "100%",
	textAlign: 'center',
};

const Spinner = () => (
	<div style={spinnerStyle}>
		<Triangle color="#00BFFF" height={80} width={80} />
	</div>
);

export default Spinner;
