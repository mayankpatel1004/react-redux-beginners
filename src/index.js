import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import TopBar from './components/TopBar';
import FooterBar from './components/FooterBar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Locations from './components/Locations';
import PrivacyPolicy from './components/Privacy-Policy';
import TermsConditions from './components/Terms-Conditions';
import Blogs from './components/Blogs';
import BlogDetails from './components/BlogDetails';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import App from './App';

const store = createStore(rootReducer);


ReactDOM.render(
  <Provider store={store}><App />
  <BrowserRouter>
  <div className="App main-wrapper">
    <TopBar></TopBar>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/locations" component={Locations} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/terms-conditions" component={TermsConditions} />
    <Route path="/blogs" component={Blogs} />
    <Route path="/blog/:id" component={BlogDetails}/>
    <FooterBar></FooterBar>
  </div>
  </BrowserRouter>
  </Provider>
  ,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();