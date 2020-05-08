import React from 'react';

const Splash = () => (
	<div className="splash">
		<div className="splash__head">
			<div className="splash__head--content">
				<h1 className="splash__title splash__title--bold">
					C
					<span id="coffee" role="img" aria-label="o">☕</span>
					ffee &amp;
				</h1>
				<h2 className="splash__title splash__title--sub">Coding</h2>
			</div>
		</div>
		<div className="splash__body">
			<div className="splash__body--content">
				<p className="fade--slogan">Featuring</p>
				<p className="fade--title">Javascript, React, NodeJS</p>
			</div>
		</div>
	</div>
);

export default Splash;