import { FormEvent } from 'react';
import '../styles/styles.css';
import { useForm } from '../hooks/useForm';

export const RegisterPage = () => {

    const { Name, Email, Password, Password2, onChange, resetForm, isValidEmail } = useForm({
        Name: '',
        Email: '',
        Password: '',
        Password2: ''
    });

    const onSubmit = (event: FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
    }

    return (

        <div>
            <h1>Register Page</h1>

            <form onSubmit={onSubmit} noValidate>
                <input
                    name="Name"
                    type="text"
                    placeholder="Name"
                    value={Name}
                    onChange={ onChange }
                    className={ `${Name.trim().length <= 0 && 'has-error'}` } 
                />
                { Name.trim().length <= 0 && <span>Este campo es necesario</span>}

                <input
                    name="Email"
                    type="email"
                    placeholder="Email"
                    value={Email}
                    onChange={ onChange }
                    className={ `${ !isValidEmail(Email) && 'has-error'}` } 
                />
                { !isValidEmail(Email) && <span>Email no es validato</span>}

                <input
                    name="Password"
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={ onChange }
                    className={ `${Password.trim().length <= 0 && 'has-error'}` } 
                />
                { Password.trim().length <= 0 && <span>Este campo es necesario</span>}
                { ( Password.trim().length > 0 && Password.trim().length < 6 ) && <span>La contraseña tiene que tener 6 caracteres</span>}

                <input
                    name="Password2"
                    type="password"
                    placeholder="Repeat the password"
                    value={Password2}
                    onChange={ onChange }
                    className={ `${Password2.trim().length <= 0 && 'has-error'}` } 
                />
                { Password2.trim().length <= 0 && <span>Este campo es necesario</span>}
                { ( Password2.trim().length > 0 && Password !== Password2 ) && <span>La contraseñas deben ser iguales</span>}

                <button type="submit">
                    Create
                </button>

                <button type="button" onClick={resetForm}>
                    ResetForm
                </button>
            </form>
        </div>
    )
}