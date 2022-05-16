
import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
    FormControl,
    Button
  } from '@chakra-ui/react'

const StudentForm = (props) => {
const validationSchema = Yup.object().shape({
	name: Yup.string().required("Required"),
	email: Yup.string()
	.email("invalid email address")
	.required("Required"),
	rollno: Yup.number()
	.positive("Invalid roll number")
	.integer("Invalid roll number")
	.required("Required"),
});
console.log(props);
return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form>
		<FormControl>
			<Field name="name" type="text"
				className="form-control" />
			<ErrorMessage
			name="name"
			/>
		</FormControl>
		<FormControl>
			<Field name="email" type="text"
				className="form-control" />
			<ErrorMessage
			name="email"
			/>
		</FormControl>
		<FormControl>
			<Field name="rollno" type="number"
				className="form-control" />
			<ErrorMessage
			name="rollno"
			/>
		</FormControl>
		<Button variant="danger" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default StudentForm;
