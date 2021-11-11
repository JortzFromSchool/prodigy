import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

import { AuthRoute } from '../util/route_util';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import TopTenTracksContainer from './top_ten_tracks/top_ten_tracks_container';
import TrackShowContainer from './show_track/show_container';
import Modal from './modal/modal';

const App = () => (
    <div>
      <Modal />
      <header className="header">
        <div className="header-search" />
        <Link to="/" className="header-link">
          <h2>PRODIGY</h2>
        </Link>
        <GreetingContainer />
      </header>
      <div className="subheader"></div>
        <Switch>
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <Route exact path="/tracks/:trackId" component={TrackShowContainer} />
          <Route exact path="/" component={TopTenTracksContainer} />
        </Switch>
    </div>
  );
  
  export default App;

