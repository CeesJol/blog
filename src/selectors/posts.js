export default (posts, { text, sortBy }) => {
	return posts.filter((post) => {
		const searchWords = text.split(" ");
		for (var searchWord of searchWords) {
			if (post.title.toLowerCase().includes(searchWord.toLowerCase())) {
				return true;
			}
		}
		// const textMatch = post.title.toLowerCase().includes(text.toLowerCase());

		return false;
		// return true;
	})//.sort((a, b) => {
	// 	return a.createdAt < b.createdAt ? 1 : -1;
	// });
};