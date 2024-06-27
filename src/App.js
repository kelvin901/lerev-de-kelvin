import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import RestaurantsAndBar from './pages/RestaurantsAndBar';
import Conferences from './pages/Conferences';
import AmazingExperience from './pages/AmazingExperience';
import VirtualTour from './pages/VirtualTour';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/accommodation">Accommodation</Link></li>
            <li><Link to="/restaurants-and-bar">Restaurants & Bar</Link></li>
            <li><Link to="/conferences">Conferences</Link></li>
            <li><Link to="/amazing-experience">Amazing Experience</Link></li>
            <li><Link to="/virtual-tour">Virtual Tour</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/accommodation" component={Accommodation} />
          <Route path="/restaurants-and-bar" component={RestaurantsAndBar} />
          <Route path="/conferences" component={Conferences} />
          <Route path="/amazing-experience" component={AmazingExperience} />
          <Route path="/virtual-tour" component={VirtualTour} />
          <Route path="/contact-us" component={ContactUs} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
