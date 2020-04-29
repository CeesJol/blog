import React from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview';
import selectPosts from '../selectors/posts';

export const Feed = (props) => (
	<div>
		<div className="feed">
			{
				props.posts.length === 0 ? (
					<div>
						<span>No posts found</span>
					</div>
				) : (
					props.posts.map((post, i) => {
						return (
							<PostPreview 
								className={(i !== props.posts.length - 1) ? "border-bottom" : "x"} 
								key={post.id} 
								{...post} 
							/>
						);
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