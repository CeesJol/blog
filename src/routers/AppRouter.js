import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory as createHistory } from 'history'
import DashboardPage from '../components/DashboardPage';
import NotFoundPage from '../components/NotFoundPage';
import App from '../components/App';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import AddPostPage from '../components/AddPostPage';
import EditPostPage from '../components/EditPostPage';
import PostPage from '../components/PostPage';
import LoginPage from '../components/LoginPage';
import Head from '../components/Head';

export const history = createHistory();

history.listen((location, action) => {
	window.scrollTo(0, 0)
});

const AppRouter = () => (
	<>
		<Head />
		<Router history={history}>
			<Switch>
				<PublicRoute path="/" component={App} exact={true} headerStyle={'transparent'} />
				<PublicRoute path="/post/:id" component={PostPage} />
				<PublicRoute path="/tag/:name" component={App} />
				<PublicRoute path="/login" component={LoginPage} />
				<PrivateRoute path="/dashboard" component={DashboardPage} />
				<PrivateRoute path="/create" component={AddPostPage} />
				<PrivateRoute path="/edit/:id" component={EditPostPage} />
				<PublicRoute component={NotFoundPage} />
			</Switch>
		</Router>
	</>
);

export default AppRouter;