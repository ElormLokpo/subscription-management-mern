import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import MainRoute from './routes/main';
import {Provider} from 'react-redux';
import {store} from './services/redux/store';
import DashboardMainPage from './pages/dashboard/main';

ReactDOM.render(
    <Provider store = {store}>
        <MainRoute />
    </Provider>
    
, document.querySelector('#root'));


