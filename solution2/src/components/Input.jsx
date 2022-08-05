import React, { useState, useEffect } from 'react';

function Input({ setData, text, data, filterBy, originalData }) {
	const [ inputData, setInputData ] = useState('');

	useEffect(
		() => {
			if (inputData === '') {
				setData(originalData);
			}
		},
		[ inputData ]
	);

	const handleOnChange = (event) => {
		const newFilteredData = data.filter((item) => {
			return item[filterBy].toString().toLowerCase().includes(event.target.value);
		});
		setInputData(event.target.value);
		setData(newFilteredData);
	};

	return <input placeholder={text} onChange={handleOnChange} />;
}

export default Input;
