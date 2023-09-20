import './bootstrap';
import '../sass/app.scss'

import jQuery from 'jquery';
window.$ = jQuery;

import ReactDOM from 'react-dom/client';        
import Home from './components/home';

// ReactDOM.createRoot(document.getElementById('app')).render(     
//     <Home />        
// );

		
import home from './components/home';

ReactDOM.createRoot(document.getElementById('app')).render(		
    <Home />		
);

