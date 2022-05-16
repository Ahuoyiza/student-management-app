import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from '@chakra-ui/react';
import Student from './Student';

const AllStudents = () => {
const [students, setStudents] = useState([]);

useEffect(() => {
	axios
	.get("http://localhost:4000/students/")
	.then(({ data }) => {
		setStudents(data);
	})
	.catch((error) => {
		console.log(error);
	});
}, []);

const DataTable = () => {
	return students.map((res, i) => {
	return <Student obj={res} key={i} />;
	});
};

return (
	<div >
	<Table >
		<thead>
		<tr>
			<th>Name</th>
			<th>Email</th>
			<th>Roll No</th>
			<th>Action</th>
		</tr>
		</thead>
		<tbody>{DataTable()}</tbody>
	</Table>
	</div>
);
};

export default AllStudents;
