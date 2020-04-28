import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import App from '../components/App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import PostPage from '../components/PostPage';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
  	<div>
			<Switch>
				<PublicRoute path="/" component={App} exact={true} headerStyle={'transparent'} />
				<PublicRoute path="/post/:id" component={PostPage} />
				<PublicRoute path="/login" component={LoginPage} />
				<PrivateRoute path="/dashboard" component={DashboardPage} />
				<PrivateRoute path="/create" component={AddPostPage} />
				<PrivateRoute path="/edit/:id" component={EditPostPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</div>
  </Router>
);

export default AppRouter;