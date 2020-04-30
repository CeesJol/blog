import React from 'react';
import Feed from './Feed';
import FeedFilters from './FeedFilters';

export class TagPage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			tag: props.match.params.name
		};
	}
	render() {
		return (
			<div className="content-container">
				<FeedFilters tag={this.state.tag}/>
				<Feed tag={this.state.tag} />
			</div>
		)
	}
};

export default TagPage;