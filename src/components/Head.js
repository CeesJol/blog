import React from "react";
import {Helmet} from "react-helmet";
 
class Head extends React.Component {
  render () {
    return (
      <Helmet>
        <meta
          name="description"
          content="Some description"
        />
        <title>My app!</title>
      </Helmet>
    );
  }
};

export default Head;
