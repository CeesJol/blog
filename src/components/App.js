import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const App = ({ startLogin }) => (
  <div>
    app
		<button className="button" onClick={startLogin}>Login with Google</button>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(App);