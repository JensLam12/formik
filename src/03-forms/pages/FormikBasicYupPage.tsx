import { useFormik } from "formik"
import * as Yup from 'yup';
import '../styles/styles.css';

export const FormikBasicYupPage = () => {

    const { handleSubmit, errors, touched, getFieldProps
    } = useFormik({
        initialValues:{
            FirstName: '',
            LastName: '',
            Email: ''
        },
        onSubmit:(values) =>{
            console.log( values );
        },
        validationSchema: Yup.object({
            FirstName: Yup.string().max(15, 'Debe de tener 15 caracteres o menos').required('requerido'),
            LastName: Yup.string().max(10, 'Debe de tener 15 caracteres o menos').required('requerido'),
            Email: Yup.string().email('Debe ser un email correcto').required('Requerido')
        })
    });

    return(
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="FirstName">First Name</label>
                <input type="text" { ...getFieldProps('FirstName')} />
                { touched.FirstName && errors.FirstName && <span>{errors.FirstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" { ...getFieldProps('LastName')}  />
                { touched.LastName && errors.LastName && <span>{errors.LastName}</span>}

                <label htmlFor="email">Email</label>
                <input type="email" { ...getFieldProps('Email')} />
                { touched.Email && errors.Email && <span>{errors.Email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}