import ReactDOM from 'react-dom';
import App from './App';
import { getFirestoreApp } from './firebase/config';

getFirestoreApp();

const container = document.getElementById('root');

ReactDOM.render(<App />, container);
