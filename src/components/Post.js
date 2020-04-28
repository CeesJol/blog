import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const Post = ({ id, title, content, createdAt, amount }) => (
	<div>
		<Link className="list-item" to={`/edit/${id}`}>
			<h3 className="list-item__title">{title}</h3>
		</Link>
		<p>{content}</p>
		<p>Seen {amount} times</p>
		<span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
	</div>
);

export default Post;
