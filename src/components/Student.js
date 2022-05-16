import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

const Student = (props) => {
const { _id, name, email, rollno } = props.obj;

const deleteStudent = () => {
	axios
	.delete(
"http://localhost:4000/students/delete-student/" + _id)
	.then((res) => {
		if (res.status === 200) {
		alert("Student successfully deleted");
		window.location.reload();
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};

return (
	<tr>
	<td>{name}</td>
	<td>{email}</td>
	<td>{rollno}</td>
	<td>
		<Link 
		to={"/edit-student/" + _id}>
		Edit
		</Link>
		<Button onClick={deleteStudent}
		size="sm" variant="danger">
		Delete
		</Button>
	</td>
	</tr>
);
};

export default Student;
