const Table = ({ data }) => {
	return (
		<table cellPadding={5} cellSpacing={5}>
			<thead>
				<tr>
					<th>id</th>
					<th>updated</th>
					<th>code</th>
					<th>firstName</th>
					<th>lastName</th>
				</tr>
			</thead>
			<tbody>
				{data.map((item) => (
					<tr key={item.id}>
						<td>{item.id}</td>
						<td>{item.updated}</td>
						<td>{item.code}</td>
						<td>{item.firstName}</td>
						<td>{item.lastName}</td>
						<td />
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default Table;
