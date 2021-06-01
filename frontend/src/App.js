import {useEffect, useState} from 'react';
import './App.css';

import Dashboard from './pages/Dashboard';
import CreateRoom from './pages/Creation';
import ChatRoom from './pages/Chat';
import { connect } from "react-redux";
import {
  Switch,
  Redirect,
  Route,
  withRouter,
  BrowserRouter as Router,
} from "react-router-dom";


// this would be a place to store data on the user 
const mapStateToProps = (state) => {
  return {
      mobile: state.app.mobile
  };
}

function App() {

  // checkWindowDimensions listener
  useEffect(() => {

    // check dimensions on initial render
    this.checkWindowDimensions()

    window.addEventListener('resize', this.checkWindowDimensions);

  }, [])

  const checkWindowDimensions = () => {

    if ( inapp.isInApp ){ // its mobile
      this.props.toggleMobile('ON');
    } else {

      if ( window.innerWidth < 901 && !this.props.mobile ){
        this.props.toggleMobile('ON');
      } else if ( window.innerWidth >= 901 && this.props.mobile ){
        
        this.props.toggleMobile('OFF');
      }
    }
  }

  const mobile = { props }

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Redirect to="/rooms" />
        </Route>
        <Route path="/rooms" component={Dashboard} />
        <Route path="/room/:id" component={ChatRoom} />
        <Route path="/room/:id/edit" component={CreateRoom} />
        <Route exact path='/404' component={Page404} />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}


export default connect(mapStateToProps, { toggleMobile })(withRouter(App));
