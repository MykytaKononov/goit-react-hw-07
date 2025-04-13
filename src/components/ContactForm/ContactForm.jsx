import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required field")
    .min(3, "Too short name")
    .max(50, "Too long name"),
  number: Yup.string()
    .required("Required field")
    .min(3, "Too short number")
    .max(50, "Too long number"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form>
        <div>
          <label htmlFor="name">Name</label>
          <Field type="text" name="name" id="name" />
          <ErrorMessage name="name" component="p" />
        </div>
        <div>
          <label htmlFor="number">Number</label>
          <Field type="tel" name="number" id="number" />
          <ErrorMessage name="number" component="p" />
        </div>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
}
