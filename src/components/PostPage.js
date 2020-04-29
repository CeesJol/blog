import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { startEditPost } from '../actions/posts';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export class PostPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: props.post.id ? props.post.id : '',
			title: props.post ? props.post.title : '',
			intro: props.post ? props.post.intro : '',
			content: props.post ? props.post.content : '',
			createdAt: props.post ? moment(props.post.amountcreatedAt).format('MMMM Do, YYYY') : moment(),
			amount: props.post ? props.post.amount : 0,
			error: '',
			isAuthenticated: props.isAuthenticated ? true : false
		};
	}
	// componentDidMount() {
	// 	this.props.startEditPost(this.state.id, {
	// 		amount: this.state.amount + 1
	// 	})
	// 	console.log(this.state.amount);
	// }
	render() {
		return (
			<div className="content-container">
				<h1>{this.state.title}</h1>
				<i>{this.state.createdAt}</i>
				{this.state.isAuthenticated && (
					<p><Link to={`/edit/${this.state.id}`}>Edit this post</Link></p>
				)}
				<div dangerouslySetInnerHTML={{__html: md.render(this.state.intro)}} />
				<div dangerouslySetInnerHTML={{__html: md.render(this.state.content)}} />
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

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);