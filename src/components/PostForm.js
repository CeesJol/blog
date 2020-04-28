import React from 'react';
import moment from 'moment';

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			content: props.post ? props.post.content : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			amount: 0,
			error: ''
		};
	}
	onDescriptionChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};
	onNoteChange = (e) => {
		const content = e.target.value;
		this.setState(() => ({ content }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.title || !this.state.content) {
			this.setState(() => ({ error: 'Please provide title and content' }));
		} else {
			this.setState(() => ({ error: '' }));
			this.props.onSubmit({
				title: this.state.title,
				content: this.state.content,
				createdAt: this.state.createdAt.valueOf(),
				amount: 0
			});
		}
	}
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					placeholder="Description"
					autoFocus
					className="text-input"
					value={this.state.title}
					onChange={this.onDescriptionChange}
				/>
				<textarea
					placeholder="Add content for your post"
					className="textarea"
					value={this.state.content}
					onChange={this.onNoteChange}
				>
				</textarea>
				<div>
					<button className="button">Save Post</button>
				</div>
			</form>
		)
	}
};