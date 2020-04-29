import React from 'react';
import { Link } from 'react-router-dom';

const DashboardPage = () => (
	<div>
		<div className="page-header">
			<div className="content-container">
				<h1 className="page-header__title">Edit Post</h1>
			</div>
		</div>
		<div className="content-container">
			<Link to={`/create`}>New post</Link>
		</div>
	</div>
);

export default DashboardPage;