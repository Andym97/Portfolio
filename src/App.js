
import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import{CSSTransition, TransitionGroup,} from 'react-transition-group';

//pages
import Home from './components/pages/Home';
import Faces from './components/pages/Faces.js';
import NotFound from './components/pages/404.js';
import Places from './components/pages/Places';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';


// Need to fix positioning 
function App() {
  return (
<Router>
    <Route render={({location}) =>(
      <TransitionGroup>

        <CSSTransition
          //key={location.key}
          //timeout={0}
          //className="fade"
  >
          <Switch location={location}>
          <Route exact path='/' exact component= {Home} />
          <Route  path='/faces' exact component= {Faces} />
          <Route  path='/places' exact component= {Places}/>
          <Route  path='/projects' exact component= {Projects}/>
          <Route  path='/contact' exact component= {Contact}/>
          <Route  path='/404' component= {NotFound}/>
          <Redirect to ="/404"/>

          </Switch>
        </CSSTransition>
      </TransitionGroup>
    )}/>
      
      </Router>

      
  );
      }
  



export default App;
