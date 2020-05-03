import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';
import { startSetPosts, startResetPosts } from '../actions/posts';
import Feed from './Feed';
import FeedFilters from './FeedFilters';
import Splash from './Splash';
import { history } from '../routers/AppRouter';

let url = window.location.pathname;

export class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tag: props.match.params.name || undefined
		};
	}
	handleScroll = () => {
		const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
		const body = document.body;
		const html = document.documentElement;
		const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
		const windowBottom = windowHeight + window.pageYOffset;
		if (windowBottom >= docHeight) {
			this.props.startSetPosts(this.state.tag);
		}
	}
	componentDidMount() {
		if (url !== window.location.pathname) {
			console.log('posts reset + set');
			url = window.location.pathname;
			this.props.startResetPosts(this.state.tag);
		}
		window.addEventListener("scroll", this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener("scroll", this.handleScroll);
	}
	render() {
		return (
			<div className="test">
				{history.location.pathname === '/' && <Splash />}
				<div className="content-container">
					<FeedFilters tag={this.state.tag} />
					<Feed tag={this.state.tag} />
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	startLogin: () => dispatch(startLogin()),
	startSetPosts: (tag) => dispatch(startSetPosts(tag)),
	startResetPosts: () => dispatch(startResetPosts())
});

export default connect(undefined, mapDispatchToProps)(App);