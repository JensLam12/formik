import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { RegisterPage, FormikBasicPage, FormikBasicYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages';
  
export const Navigation = () => {
    return (
        <Router>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                        <li>
                            <NavLink to="/register" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-basic" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-yup" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik-Yup</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-components" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik-Components</NavLink>
                        </li>
                        <li>
                            <NavLink to="/formik-abstraction" className={ ({ isActive }) => isActive ? 'nav-active' : '' }>Formik-Abstraction</NavLink>
                        </li>
                    </ul>
                </nav>
  
                <Routes>
                    <Route path="/formik-basic" element={ <FormikBasicPage /> } />
                    <Route path="/formik-yup" element={ <FormikBasicYupPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/formik-components" element={ <FormikComponents /> } />
                    <Route path="/formik-abstraction" element={ <FormikAbstraction /> } />
                </Routes>
            </div>
        </Router>
    );
}