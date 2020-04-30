import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TagEntity from './TagEntity';
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
var truncate = require('truncate');

const PostPreview = ({ className, id, title, intro, content, img, createdAt, tags, amount }) => {
	return (
		<div className={"post-preview " + className}>
			<Link className="nostyle" to={`/post/${id}`}>
				<div className="post-preview__content">
					<h3>{title}</h3>
					<p className="post__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
					<div dangerouslySetInnerHTML={{__html: truncate(md.render(intro), 300)}} />
				</div>
			</Link>
			{tags && tags.split(", ").map((tag) => {
				return (
					<TagEntity tag={tag} />
				)
			})}
		</div>
	);
};

export default PostPreview;
