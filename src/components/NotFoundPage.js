import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="content-container">
		<h1>404 - not found</h1>
    <Link to="/">Go home</Link>
  </div>
);

export default NotFoundPage;