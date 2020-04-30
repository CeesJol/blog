import React from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview';
import selectPosts from '../selectors/posts';

export const Feed = (props) => {
	const posts = props.tag ? props.posts.filter((post) => post.tags.includes(props.tag)) : props.posts;
	return (
		<div>
			<div className="feed">
				{
					posts.length === 0 ? (
						<div>
							<span>No posts found</span>
						</div>
					) : (
						posts.map((post, i) => {
							return (
								<PostPreview 
									className={(i !== posts.length - 1) ? "border-bottom" : "x"} 
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
};

const mapStateToProps = (state) => {
	return {
		posts: selectPosts(state.posts, state.filters)
	};
};

export default connect(mapStateToProps)(Feed);