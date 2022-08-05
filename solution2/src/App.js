import './App.css';
import Button from './components/Button';
import Input from './components/Input';

import Table from './components/Table';

import { useEffect, useState } from 'react';

function App() {
	const [ data, setData ] = useState([ {} ]);
	const [ originalData, setOriginalData ] = useState([ {} ]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('http://ws-old.parlament.ch/councillors?format=json', {
					method: 'GET',
					headers: {
						Accept: 'text/json'
					}
				});
				const json = await response.json();
				setData(json);
				setOriginalData(json);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<div className="filters">
				<Button id="sortById" sortBy="id" text="Sort By Id" data={data} setData={setData} />
				<Button
					id="sortByFirstName"
					sortBy="firstName"
					text="Sort By First Name"
					data={data}
					setData={setData}
				/>
			</div>

			<Input text="Filter By Id" filterBy="id" setData={setData} data={data} originalData={originalData} />
			<Input
				text="Filter By First Name"
				filterBy="firstName"
				setData={setData}
				data={data}
				originalData={originalData}
			/>
			<Table data={data} />
		</div>
	);
}

export default App;
