import React from 'react';
import ReactDOM from 'react-dom';

//import { BrowserRouter as Router, Route } from "react-router-dom";

import { BrowserRouter as Router, Route,Link} from 'react-router-dom';


import * as ServiceWorker from './serviceWorker';

// import Searchbar from './components/Searchbar/Searchbar';
// import Footer from './components/Footer/Footer';
// import HOC from './components/HOC/index';
import Home from './pages/Home';
import Goods from './pages/Goods.js';


import { Provider } from 'react-redux';
import store from './components/store/store';

import './index.css';
import 'weui';
// console.log("store",store.getState());


ReactDOM.render(<Provider store={store}>
        <Router>
            {/* <HOC/>
            <Footer/> */}
            <Route exact path="/" component={Home} />
            <Route  path="/goods" component={Goods} />

        </Router>
    </Provider>,
   
    
    
    document.getElementById('root')
    
    
    )
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
ServiceWorker.unregister();