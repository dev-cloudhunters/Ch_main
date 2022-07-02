import React from "react";
import styled from "styled-components"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {
  grommet,
  Box,
  Button,
  Grommet,
  FormField,
  Heading,
  Select,
  TextArea,
  TextInput
} from "grommet";

const encode = (data) => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const BoxTransp = styled(Box)`
  
  background: var(--primary);
`;

const FormComp = ({ title, introduction }) => {
  return (
    <Grommet theme={grommet}>
      <BoxTransp align="center" >
        <BoxTransp width="medium" margin="large">
          <Heading>grommet + formik</Heading>
          <Formik
           /*  initialValues={{
              name: '',
              email: '',
              message: '',
            }}
            onSubmit={
              (values, actions) => {
                fetch("/", {
                  method: "POST",
                  headers: { "Content-Type": "application/x-www-form-urlencoded" },
                  body: encode({ "form-name": "contact-demo", ...values })
                })
                  .then(() => {
                    console.log("values", values)
                    alert('Success');
                    actions.resetForm()
                  })
                  .catch(() => {
                    alert('Error');
                  })
                  .finally(() => actions.setSubmitting(false))
              }
            }
            validate={values => {
              const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
              const errors = {};
              if (!values.name) {
                errors.name = 'Nome richiesto'
              }
              if (!values.email || !emailRegex.test(values.email)) {
                errors.email = 'Email non vailda'
              }
              if (!values.message) {
                errors.message = 'Message Required'
              }
              return errors;
            }}
          >
            {() => ( */
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = "required";
                }
                if (!values.employeeId) {
                  errors.employeeId = "required";
                } else if (!values.employeeId.match(/^[0-9]+$/)) {
                  errors.employeeId = "numeric only";
                }
                return errors;
              }}
              /* validateOnBlur={submitted}
              validateOnChange={submitted} */
              initialValues={{
                values: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                // whatever submitting the form should entail
                alert("Submitting\n" + JSON.stringify(values, null, 2));
                setSubmitting();
              }}
            >
              {({
                values,
                errors,
                handleChange,
                handleSubmit,
                setFieldValue
              }) => (
              <Form className="formHolder" name="contact-demo" data-netlify={true} data-netlify-honeypot="bot-field">
                <FormField label="Nome" error={errors.name}>
                  <TextInput
                    name="name"
                    value={values.name || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Email" error={errors.email}>
                  <TextInput
                    name="email"
                    type="email"
                    value={values.email || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <FormField label="Employee ID" error={errors.employeeId}>
                  <TextInput
                    name="employeeId"
                    value={values.employeeId || ""}
                    onChange={handleChange}
                  />
                </FormField>
                {/* <FormField label="Size" error={errors.size}>
                  <Select
                    name="size"
                    options={["small", "medium", "large"]}
                    value={values.size || ""}
                    onChange={event => setFieldValue("size", event.value)}
                  />
                </FormField> */}
                <FormField label="Note" error={errors.comments}>
                  <TextArea
                    name="comments"
                    value={values.comments || ""}
                    onChange={handleChange}
                  />
                </FormField>
                <Box
                  tag="footer"
                  margin={{ top: "medium" }}
                  direction="row"
                  justify="between"
                >
                  <Button label="Cancel" />
                  <Button type="submit" primary label="Create" />
                </Box>
                {/*  <Field type="hidden" name="form-name" />
                <Field type="hidden" name="bot-field" />

                <label htmlFor="name">Nome di chi volerà: </label>
                <Field name="name" />
                <ErrorMessage name="name" />

                <label htmlFor="surname">Cognome di chi volerà: </label>
                <Field name="surname" />
                <ErrorMessage name="surname" />

                <label htmlFor="email">Email: </label>
                <Field name="email" />
                <ErrorMessage name="email" />

                <label htmlFor="phone">Telefono: </label>
                <Field name="phone" />
                <ErrorMessage name="phone" />

                <div role="group" aria-labelledby="whatsapp-group">
                  <label>
                    <Field type="radio" name="whatsapp-tel" value="Si" />
              Si
            </label>
                  <label>
                    <Field type="radio" name="whatsapp-tel" value="No" />
              No
            </label>
                 
                </div>

                <label htmlFor="message">Message: </label>
                <Field name="message" component="textarea" />
                <ErrorMessage name="message" />

                <button type="submit">Send</button> */}
              </Form>
            )}
          </Formik>
        </BoxTransp>
      </BoxTransp>
    </Grommet>
  )
}

export default FormComp