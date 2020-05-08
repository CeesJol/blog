const postsReducerDefaultState = [];

export default (state = postsReducerDefaultState, action) => {
	switch (action.type) {
		case 'ADD_POST':
			return [
				...state, 
				action.post
			];
		case 'REMOVE_POST':
			return state.filter(({id}) => id !== action.id);
		case 'EDIT_POST':
			return state.map((post) => {
				if (post.id === action.id) {
					return {
						...post,
						...action.updates
					}
				} else {
					return post;
				}
			});
		case 'RESET_POSTS':
			return [];
		case 'SET_POST':
			console.log('set post')
			console.log(action.posts);
			return action.posts;
		case 'SET_POSTS':
			console.log('set posts')
			console.log(action.posts);
			if (state) return [...state, ...action.posts];
			return action.posts;
		default:
			return state;
	}
};