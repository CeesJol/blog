import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import { startSetPosts } from './actions/posts';
import { login, logout } from './actions/auth';
import configureStore from './store/configureStore';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { firebase } from './firebase/firebase';
import LoadingPage from './components/LoadingPage';
import './styles/styles.scss';

const store = configureStore();
const jsx = (
	<Provider store={store}>
    <AppRouter />
  </Provider>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
// 	</React.StrictMode>,
//   document.getElementById('root')
// );
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById('root'));
    hasRendered = true;
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
		store.dispatch(login(user.uid));
    // renderApp();
		// if (history.location.pathname === '/') {
		// 	history.push('/dashboard');
		// }
  } else {
		store.dispatch(logout());
    // renderApp();
    // history.push('/');
	}
	
	store.dispatch(startSetPosts()).then(() => {
		renderApp();
	});
});


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
