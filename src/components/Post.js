import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Post = ({ id, title, content, img, createdAt, amount }) => (
	<div>
		<Link className="list-item" to={`/post/${id}`}>
			<h3 className="list-item__title">{title}</h3>
		</Link>
		<p>{content}</p>
		<span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
	</div>
);

export default Post;
