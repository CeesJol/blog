import React from 'react';
import { Link } from 'react-router-dom';
import Feed from './Feed';
import FeedFilters from './FeedFilters';

const DashboardPage = () => (
  <div>
		dashboard
		<Link to={`/create`}>New post</Link>
		<FeedFilters />
		<Feed />
  </div>
);

export default DashboardPage;