import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const PostPreview = ({ id, title, content, img, createdAt, amount }) => (
	<Link to={`/post/${id}`}>
		<div className="post-preview">
			<h3>{title}</h3>
			<p className="post__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
			<p>{content}</p>
		</div>
	</Link>
);

export default PostPreview;
