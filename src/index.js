import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import './styles/styles.scss';
import { startSetPost } from './actions/posts';
import LoadingPage from './components/LoadingPage';

const store = configureStore();
const jsx = (
	<Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

var pathname = window.location.pathname.split( '/' );

if (['post', 'edit'].includes(pathname[1])) {
	// Post page route, wait for data from db
	ReactDOM.render(<LoadingPage loadingText={'Loading the post...'} />, document.getElementById('root'));
	store.dispatch(startSetPost(pathname[2])).then(() => {
		renderApp();
	})
} else if (['dashboard', 'create'].includes(pathname[1])) {
	// Private route, wait for auth
	ReactDOM.render(<LoadingPage loadingText={'Waiting for authentication...'} />, document.getElementById('root'));
} else {
	// Other
	renderApp();
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
		store.dispatch(login(user.uid));
		if (['/login'].includes(history.location.pathname)) {
			history.push('/dashboard');
		}
		if (['/dashboard', '/create'].includes(history.location.pathname)) {
			renderApp();
		}
  } else {
		store.dispatch(logout());
	}
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
