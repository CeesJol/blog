import React from 'react';
import { Link } from 'react-router-dom';
import Feed from './Feed';
import FeedFilters from './FeedFilters';

const DashboardPage = () => (
  <div className="content-container">
		dashboard
		<Link to={`/create`}>New post</Link>
  </div>
);

export default DashboardPage;