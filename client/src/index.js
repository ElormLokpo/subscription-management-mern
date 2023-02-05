import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import DashboardMainPage from './pages/auth/dashboard/main';
import SignIn from './pages/auth/signin';

import SignUp from './pages/auth/signup';


ReactDOM.render(<DashboardMainPage />, document.querySelector('#root'));