import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ headerStyle, isAuthenticated, startLogout }) => (
	<header 
		className={
			headerStyle && headerStyle === 'transparent' ? (
				"header header-transparent"
			) : ("header")
		}
	>
		<div className="content-container">
			<div className="header__content">
				<Link className="header__title nostyle" to="/">
					Cees Jol {process.env.NODE_ENV !== 'production' && ' - Dev'}
				</Link>
				{isAuthenticated && (
					<div>
						<Link className="button button--link nostyle" to="/dashboard">
							Dashboard
						</Link>
						<button className="button button--link" onClick={startLogout}>Logout</button>
					</div>
				)}
			</div>
		</div>
	</header>
);

const mapStateToProps = (state) => ({
	isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = (dispatch) => ({
	startLogout: () => dispatch(startLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);