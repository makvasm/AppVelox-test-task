import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Profile from './pages/Profile.jsx';
import ProfileDetails from './pages/ProfileDetails.jsx';

// const Profile = lazy(() => import('./pages/Profile.jsx'));
// const ProfileDetails = lazy(() => import('./pages/ProfileDetails.jsx'));

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile/details'>
          <ProfileDetails />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}
