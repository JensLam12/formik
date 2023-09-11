import { FormikErrors, useFormik } from "formik"

interface FormValues {
    FirstName: string;
    LastName: string;
    Email: string;
}

export const FormikBasicPage = () => {

    const validate = ( { FirstName, LastName, Email }: FormValues ) => {

        const errors: FormikErrors<FormValues> = {};

        if( !FirstName) {
            errors.FirstName = 'Required';
        } else if( FirstName.length >= 15) {
            errors.FirstName = 'Must be 15 characters or less'
        }

        if( !LastName) {
            errors.LastName = 'Required';
        } else if( LastName.length >= 10) {
            errors.LastName = 'Must be 10 characters or less'
        }

        if (!Email) {
            errors.Email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Email)) {
            errors.Email = 'Invalid email address';
          }

        return errors;
    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues:{
            FirstName: '',
            LastName: '',
            Email: ''
        },
        onSubmit:(values) =>{
            console.log( values );
        },
        validate: validate
    });

    return(
        <div>
            <h1>Formik Basic Tutorial</h1>

            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="FirstName">First Name</label>
                <input 
                    type="text"
                    name="FirstName"
                    onBlur={handleBlur}
                    onChange={ handleChange}
                    value={ values.FirstName }
                />
                { touched.FirstName && errors.FirstName && <span>{errors.FirstName}</span>}
                

                <label htmlFor="lastName">Last Name</label>
                <input 
                    type="text"
                    name="LastName"
                    onBlur={handleBlur}
                    onChange={ handleChange}
                    value={ values.LastName }
                />
                { touched.LastName && errors.LastName && <span>{errors.LastName}</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    name="Email"
                    onBlur={handleBlur}
                    onChange={ handleChange}
                    value={ values.Email }
                />
                { touched.Email && errors.Email && <span>{errors.Email}</span>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}