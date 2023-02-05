import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import DashboardMainPage from './pages/dashboard/main';
import SignIn from './pages/auth/signin';

import SignUp from './pages/auth/signup';
import EmailCreate from './pages/dashboard/emailcreate';


ReactDOM.render(<EmailCreate />, document.querySelector('#root'));