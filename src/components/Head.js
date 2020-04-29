import React from "react";
import {Helmet} from "react-helmet";
 
class Head extends React.Component {
  render () {
    return (
      <Helmet>
				<meta name="google-site-verification" content="GruPFYXMwtkpol49D8EfOkCyl5wyoS2x9D4w-yPRFxY" />
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
