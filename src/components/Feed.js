import React from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview';
import selectPosts from '../selectors/posts';

export const Feed = (props) => (
	<div>
		<div className="list-body">
			{
				props.posts.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No posts found</span>
					</div>
				) : (
					props.posts.map((post) => {
						return <PostPreview key={post.id} {...post} />
					})
				)
			}
		</div>
	</div>
);

const mapStateToProps = (state) => {
	return {
		posts: selectPosts(state.posts, state.filters)
	};
};

export default connect(mapStateToProps)(Feed);