import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import Header from './components/Header';
import Public from './components/Public';
import NotFound from './components/NotFound';
import UserSignUp from './components/UserSignUp';
import UserSignIn from './components/UserSignIn';

import withContext from './Context';

import UserSignOut from './components/UserSignOut';
import Authenticated from './components/Authenticated';

//connects usersignup to the context
const UserSignUpWithContext = withContext(UserSignUp);
// Connect UserSignIn to context
const UserSignInWithContext = withContext(UserSignIn);
const HeaderWithContext = withContext(Header);

export default () => (
  <Router>
    <div>
      <HeaderWithContext />
{/* contains all the paths for the project */}
      <Switch>
        <Route exact path="/" component={Public} />
        <Route path="/authenticated" component={Authenticated} />
        <Route path="/signin" component={UserSignInWithContext} />
  <Route path="/signup" component={UserSignUpWithContext} />
  <Route path="/signout" component={UserSignOut} />
  <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);
