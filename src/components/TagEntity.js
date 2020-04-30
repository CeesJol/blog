import React from 'react';
import { Link } from 'react-router-dom';

const TagEntity = ({ tag }) => (
	<Link to={`/tag/${tag}`}>
		<div className="tag">
				{tag}
			</div>
	</Link>
);

export default TagEntity;