import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter } from '../actions/filters';

export class PostListFilters extends React.Component {
	onTextChange = (e) => {
		this.props.setTextFilter(e.target.value);
	};
	render() {
		return (
			<div className="feed-filter">
				<h1>{this.props.tag ? 'TAG: ' + this.props.tag : 'Latest posts'}</h1>
				<div className="inputWithIcon">
					<input
						type="text"
						className="text-input"
						placeholder="Search posts"
						value={this.props.filters.text}
						onChange={this.onTextChange}
					/>
					<i className="fas fa-search text-input--icon" aria-hidden="true"></i>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state) => ({
	filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
	setTextFilter: (text) => dispatch(setTextFilter(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostListFilters);
