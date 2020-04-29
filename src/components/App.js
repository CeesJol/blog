import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import Feed from './Feed';
import FeedFilters from './FeedFilters';
import Splash from './Splash';

export const App = ({ startLogin }) => (
	<div>
		<Splash />
		<div className="content-container">
			<FeedFilters />
			<Feed />
			<p>Whaddup??? /</p>
		</div>
	</div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(App);