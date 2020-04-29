import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();
var truncate = require('truncate');

const PostPreview = ({ id, title, intro, content, img, createdAt, amount }) => {
	return (
		<div>
			<Link className="nostyle" to={`/post/${id}`}>
				<div className="post-preview">
					<h3>{title}</h3>
					<p className="post__date">{moment(createdAt).format('MMMM Do, YYYY')}</p>
					<div dangerouslySetInnerHTML={{__html: truncate(md.render(intro), 300)}} />
				</div>
			</Link>
		</div>
	);
};

export default PostPreview;
