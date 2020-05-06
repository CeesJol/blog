import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import TagEntity from './TagEntity';
import Markdown from './Markdown';
var truncate = require('truncate');

const PostPreview = ({ className, id, title, intro, createdAt, tags }) => {
	return (
		<div className={"post-preview " + className}>
			<Link className="nostyle" to={`/post/${id}`}>
				<div className="post-preview__content">
					<h3>{title}</h3>
					<p className="post__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
					<Markdown value={truncate(intro)} />
				</div>
			</Link>
			{tags && tags.map((tag) => {
				return (
					<TagEntity key={tag} tag={tag} />
				)
			})}
		</div>
	);
};

export default PostPreview;
