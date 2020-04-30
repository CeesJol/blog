import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startEditPost } from '../actions/posts';
import Feed from './Feed';
import FeedFilters from './FeedFilters';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export class TagPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tag: props.match.params.name
		};
	}
	render() {
		return (
			<div className="content-container">
				<FeedFilters tag={this.state.tag}/>
				<Feed tag={this.state.tag} />
			</div>
		)
	}
};

const mapStateToProps = (state, props) => {
	return {
		isAuthenticated: !!state.auth.uid,
		post: state.posts.find((post) => post.id === props.match.params.id)
	};
};

const mapDispatchToProps = (dispatch, props) => ({
	startEditPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(TagPage);