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
					<img src="/resources/search.svg" alt="search"></img>
					{/* <div>Icons made by <a href="https://www.flaticon.com/authors/those-icons" title="Those Icons">Those Icons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
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
