import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PublicRoute = ({ 
	isAuthenticated, 
	component: Component,
	headerStyle,
	...rest
}) => (
	<Route {...rest} component={(props) => (
		<>
			<Header headerStyle={headerStyle} />
			<Component {...props} />
			<Footer />
		</>
	)} />
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);