
import db from '../firebase/firebase';
const POST_NUMBER = 1; // Number of posts loaded on each request

export const addPost = (post) => ({
	type: 'ADD_POST',
	post
});

export const startAddPost = (postData = {}) => {
	return (dispatch, getState) => {
		const {
			title = '',
			intro = '',
			content = '',
			createdAt = 0,
			tags = '',
			amount = 0
		} = postData;
		const post = { title, intro, content, createdAt, tags, amount };

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
		return db.collection('posts').doc(id).update(updates).then(() => {
			dispatch(editPost(id, updates));
		});
	};
};

// Unfinished work
export const resetPosts = () => ({
	type: 'RESET_POSTS'
})

export const startResetPosts = (tag) => {
	return (dispatch) => {
		batch = undefined;
		noMorePosts = false;
		done = true;
		dispatch(resetPosts());
		
		startSetPosts(tag);
	}
}

export const setPosts = (posts) => ({
	type: 'SET_POSTS',
	posts
});

export const setPost = (post) => ({
	type: 'SET_POSTS',
	post
});

let batch;
let noMorePosts = false;
let done = true;

export const startSetPosts = (tag) => {
	return (dispatch) => {
		if (noMorePosts || !done) return false;
		if (!batch) {
			batch = db.collection('posts')
			.orderBy('createdAt', 'desc')
			.limit(POST_NUMBER);

			if (tag) {
				batch = batch.where('tags', 'array-contains', tag);
			}
		}
		
		done = false;
		return batch.get().then((snapshot) => {
			// Get the last visible document
			var lastVisible = snapshot.docs[snapshot.docs.length-1];
			if (!lastVisible) {
				noMorePosts = true;
				done = true;
				return false;
			}
				
			const posts = [];
			snapshot.forEach((childSnapshot) => {
				const data = childSnapshot.data();
				posts.push({
					id: childSnapshot.id,
					...data
				});
			});

			dispatch(setPosts(posts));

			// if (tag) {
			// 	batch = db.collection('posts')
			// 	.orderBy('createdAt', 'desc')
			// 	.where('tags', 'array-contains', tag);
			// } else {
				// Construct a new query starting at this document,
				// get a batch of the next n posts.
				batch = db.collection('posts')
				.orderBy('createdAt', 'desc')
				.startAfter(lastVisible)
				.limit(POST_NUMBER);
			// }

			done = true;
			return batch;
		});
	}		
}

export const startSetPost = (id) => {
	return (dispatch) => {
		var query = db.collection('posts').doc(id);
		
		return query.get().then((doc) => {
			const data = doc.data();
			var post = {
				id: doc.id,
				...data
			};

			dispatch(setPosts([post]));

			return query;
		});
	}		
}
