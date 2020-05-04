import React from 'react';
import { connect } from 'react-redux';
import PostPreview from './PostPreview';
import selectPosts from '../selectors/posts';
import { startSetPosts } from '../actions/posts';

export const Feed = (props) => {
	const posts = props.tag ? props.posts.filter((post) => post.tags.includes(props.tag)) : props.posts;
	// Load first batch of posts of no posts available
	if (posts.length === 0) props.startSetPosts(props.tag);
	return (
		<div>
			{console.log('posts', posts)}
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
									className={(i !== posts.length - 1) && 'border-bottom'}
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

const mapStateToProps = (state) => ({
	posts: selectPosts(state.posts, state.filters),
});

const mapDispatchToProps = (dispatch) => ({
	startSetPosts: (tag) => dispatch(startSetPosts(tag))
})

export default connect(mapStateToProps, mapDispatchToProps)(Feed);