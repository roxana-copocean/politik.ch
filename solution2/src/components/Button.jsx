import React from 'react';

function Button({ text, sortBy, data, id, setData }) {
	const handleOnClick = () => {
		setData([ ...data ].sort((item1, item2) => (item1[sortBy] > item2[sortBy] ? 1 : -1)));
	};

	return (
		<button onClick={handleOnClick} id={id}>
			{text}
		</button>
	);
}

export default Button;
