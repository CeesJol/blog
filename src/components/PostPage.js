import React from 'react';
import moment from 'moment';
import TagEntity from './TagEntity';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startEditPost } from '../actions/posts';
import Markdown from './Markdown';

export class PostPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.post ? props.post.id : '',
			title: props.post ? props.post.title : '',
			intro: props.post ? props.post.intro : '',
			content: props.post ? props.post.content : '',
			createdAt: props.post ? moment(props.post.amountcreatedAt).format('MMMM Do, YYYY') : moment(),
			tags: props.post ? props.post.tags : '',
			amount: props.post ? props.post.amount : 0,
			error: '',
			isAuthenticated: props.isAuthenticated ? true : false
		};

		console.log(props.post);
	}
	render() {
		return (
			<div className="content-container">
				{this.state.title ? (
					<>
						<h1>{this.state.title}</h1>
						<p className="post__date">{this.state.createdAt}</p>
						{this.state.isAuthenticated && (
							<p><Link to={`/edit/${this.state.id}`}>Edit this post</Link></p>
						)}
						{this.state.tags && this.state.tags.map((tag) => {
							return (
								<TagEntity key={tag} tag={tag} />
							)
						})}
						<div className="text-bigger">
							<Markdown value={this.state.intro} />
						</div>
						<br></br>
						<Markdown value={this.state.content} />
					</>
				) : (
					<>
						<h1>Post not found</h1>
						<p>Couldn't find that post.</p>
						<Link to="/">Go home</Link>
					</>
				)}
			</div>
		)
	}
};

const mapStateToProps = (state, props) => ({
	isAuthenticated: !!state.auth.uid,
	post: state.posts.find((post) => post.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
	startEditPost: (id, post) => dispatch(startEditPost(id, post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);