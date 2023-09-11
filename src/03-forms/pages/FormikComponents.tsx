import { Formik, Field, Form, ErrorMessage } from "formik"
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikComponents = () => {

    return(
        <div>
            <h1>Formik Components</h1>

            <Formik
                initialValues={{
                    FirstName: '',
                    LastName: '',
                    Email: '',
                    Terms: false,
                    JobType: ''
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema = { Yup.object({
                    FirstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('requerido'),
                    LastName: Yup.string().max(10, 'Debe de tener 15 caracteres o menos').required('requerido'),
                    Email: Yup.string().email('Debe ser un email correcto').required('Requerido'),
                    JobType: Yup.string().notOneOf([ 'it-jr' ],'Esta opcion no es permitida').required('Requerido'),
                    Terms: Yup.boolean().isTrue("Tiene que aceptar").required("Debe aceptar las condiciones")
                })}
            >
                {
                    (formik) => (
                        <Form noValidate >
                            <label htmlFor="FirstName">First Name</label>
                            <Field name='FirstName' type="text" />
                            <ErrorMessage name="FirstName" component="span"/>

                            <label htmlFor="LastName">Last Name</label>
                            <Field name='LastName' type="text" />
                            <ErrorMessage name="LastName" component="span"/>

                            <label htmlFor="Email">Email</label>
                            <Field name='Email' type="email" />
                            <ErrorMessage name="Email" component="span"/>

                            <label htmlFor="JobType">Job Type</label>
                            <Field name='JobType' as="select" >
                                <option value=''>Pick something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Jr</option>
                            </Field>
                            <ErrorMessage name="JobType" component="span"/>

                            <label>
                                <Field name='Terms' type="checkbox" />
                                Terms and conditions
                            </label>
                            
                            <ErrorMessage name="Terms" component="span"/>

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}