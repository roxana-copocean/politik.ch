let hasTableHeader = false;

const consumer = async (url) => {
	try {
		const response = await fetch(url, {
			method: 'GET',
			headers: {
				Accept: 'text/json'
			}
		});
		const json = await response.json();

		return json;
	} catch (err) {
		console.log(err);
	}
};

const buildTable = async (data) => {
	let table = document.getElementById('concillors');
	let arr = await data;

	if (!hasTableHeader) {
		const tableHeaderKeys = Object.keys(arr[0]);
		tableHeaderKeys.forEach((el) => {
			let col = document.createElement('th');

			col.textContent = el;
			table.appendChild(col);
			hasTableHeader = true;
		});
	}

	while (table.rows.length > 0) {
		table.deleteRow(0);
	}

	arr.forEach((item, idx) => {
		let row = document.createElement('tr');

		Object.values(item).forEach((val) => {
			let col = document.createElement('td');

			col.textContent = val;
			row.appendChild(col);
		});

		table.appendChild(row);
	});
};

const buttonSortById = document.getElementById('sortById').addEventListener('click', async () => {
	const arr = await data;
	arr.sort((item1, item2) => (item1.id > item2.id ? 1 : -1));
	buildTable(arr);
});

const buttonSortByName = document.getElementById('sortByName').addEventListener('click', async () => {
	const arr = await data;
	arr.sort((item1, item2) => (item1.firstName > item2.firstName ? 1 : -1));
	buildTable(arr);
});

const filterById = document.getElementById('filterById').addEventListener('input', async (event) => {
	const arr = await data;
	const filteredArray = arr.filter((item) => {
		return item.id.toString().includes(event.target.value);
	});

	buildTable(filteredArray || []);
});

const filterByName = document.getElementById('filterByName').addEventListener('input', async (event) => {
	const arr = await data;
	const filteredArray = arr.filter((item) => {
		return item.firstName.toLowerCase().includes(event.target.value.toLowerCase());
	});

	buildTable(filteredArray || []);
});

const parliamentURL = 'http://ws-old.parlament.ch/councillors?format=json';
const data = consumer(parliamentURL);
buildTable(data);
