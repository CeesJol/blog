
import db from '../firebase/firebase';

export const addPost = (post) => ({
	type: 'ADD_POST',
	post
});

export const startAddPost = (postData = {}) => {
	return (dispatch, getState) => {
		const {
			title = '',
			content = '',
			createdAt = 0,
			amount = 0
		} = postData;
		const post = { title, content, createdAt, amount };

		return db.collection('posts').add(post).then((ref) => {
			dispatch(addPost({
				id: ref.id,
				...post
			}))
		})
	}
}

export const removePost = ({ id } = {}) => ({
	type: 'REMOVE_POST',
	id
});

export const startRemovePost = ({ id } = {}) => {
	return (dispatch, getState) => {
		return db.collection('posts').doc(id).delete().then(() => {
			dispatch(removePost({ id }));
		});
	};
};

export const editPost = (id, updates) => ({
	type: 'EDIT_POST',
	id,
	updates
});

export const startEditPost = (id, updates) => {
	return (dispatch, getState) => {
		console.log('EDIT.', id, updates);
		return db.collection('posts').doc(id).update(updates).then(() => {
			dispatch(editPost(id, updates));
		});
	};
};

export const setPosts = (posts) => ({
	type: 'SET_POSTS',
	posts
});

export const startSetPosts = (posts) => {
	
	return (dispatch, getState) => {
		return db.collection('posts')
			.get().then((snapshot) => {	
				
			const posts = [];

			snapshot.forEach((childSnapshot) => {
				posts.push({
					id: childSnapshot.id,
					...childSnapshot.data()
				});
			});

			dispatch(setPosts(posts));
		})
	}
};