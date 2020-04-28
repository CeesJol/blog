import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Feed from './Feed';
import FeedFilters from './FeedFilters';

export const App = ({ startLogin }) => (
  <div>
    <p>app</p>
		<button className="button" onClick={startLogin}>Login with Google</button>
		<p>feed</p>
		<FeedFilters />
		<Feed />
	</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(App);