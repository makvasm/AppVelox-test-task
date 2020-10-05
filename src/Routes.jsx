import React, { lazy } from 'react';
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const Profile = lazy(() => import('./pages/Profile.jsx'));
const ProfileDetailes = lazy(() => import('./pages/ProfileDetails.jsx'));

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/profile/details'>
          <ProfileDetailes />
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
      </Switch>
    </Router>
  )
}
