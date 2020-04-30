import React from 'react';
import moment from 'moment';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default class PostForm extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			title: props.post ? props.post.title : '',
			intro: props.post ? props.post.intro : '',
			content: props.post ? props.post.content : '',
			createdAt: props.post ? moment(props.post.createdAt) : moment(),
			tags: props.post ? props.post.tags : '',
			amount: 0,
			error: ''
		};
	}
	onTitleChange = (e) => {
		const title = e.target.value;
		this.setState(() => ({ title }));
	};
	onIntroChange = (e) => {
		const intro = e.target.value;
		this.setState(() => ({ intro }));
	};
	onTagsChange = (e) => {
		const tags = e.target.value;
		this.setState(() => ({ tags }));
	};
	onContentChange = (e) => {
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
				intro: this.state.intro,
				content: this.state.content,
				createdAt: this.state.createdAt.valueOf(),
				tags: this.state.tags,
				amount: 0
			});
		}
	}
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
				{this.state.error && <p className="form__error">{this.state.error}</p>}
				<h3>Title</h3>
				<input
					type="text"
					placeholder="Title"
					autoFocus
					className="text-input text-input--wide"
					value={this.state.title}
					onChange={this.onTitleChange}
				/>

				<h3>Tags</h3>
				<input
					type="text"
					placeholder="Tags"
					autoFocus
					className="text-input text-input--wide"
					value={this.state.tags}
					onChange={this.onTagsChange}
				/>

				<h3>Intro</h3>
				<div className="editor">
					<div className="editor__input">
						<textarea
							placeholder="Add an introduction for your post"
							className="textarea"
							value={this.state.intro}
							onChange={this.onIntroChange}
						>
						</textarea>
					</div>
					<div className="editor__preview">
						<div dangerouslySetInnerHTML={{ __html: md.render(this.state.intro) }} />
					</div>
				</div>

				<h3>Content</h3>
				<div className="editor">
					<div className="editor__input">
						<textarea
							placeholder="Add content for your post"
							className="textarea"
							value={this.state.content}
							onChange={this.onContentChange}
						>
						</textarea>
					</div>
					<div className="editor__preview">
						<div dangerouslySetInnerHTML={{ __html: md.render(this.state.content) }} />
					</div>
				</div>

				<div>
					<button className="button">Save Post</button>
				</div>
			</form>
		)
	}
};