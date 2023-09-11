import { Formik, Form } from "formik"
import * as Yup from 'yup';
import '../styles/styles.css';
import { MyTextInput, MySelect, MyCheckBox } from "../components";

export const FormikAbstraction = () => {

    return(
        <div>
            <h1>Formik Abstraction</h1>

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

                            <MyTextInput 
                                label='First Name' 
                                name="FirstName"
                                placeholder="First Name"
                            />

                            <MyTextInput 
                                label='Last Name' 
                                name="LastName"
                                placeholder="Last Name"
                            />

                            <MyTextInput 
                                label='Email' 
                                name="Email"
                                placeholder="went@gmail.com"
                                type="email"
                            />

                            <MySelect 
                                label='JobType' 
                                name="JobType"
                            >
                                <option value=''>Pick something</option>
                                <option value='developer'>Developer</option>
                                <option value='designer'>Designer</option>
                                <option value='it-senior'>IT Senior</option>
                                <option value='it-jr'>IT Jr</option>
                            </MySelect>

                            <MyCheckBox 
                                label={"Terms and conditions"} 
                                name={"Terms"} 
                            />

                            <button type="submit">Submit</button>
                        </Form>
                    )
                }
            </Formik>
        </div>
    )
}