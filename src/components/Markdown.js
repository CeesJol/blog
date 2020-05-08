import React from 'react';
import Markdown from 'react-markdown/with-html';
import CodeBlock from './CodeBlock';

export const md = ({ value }) => (
	<Markdown
		source={value}
		renderers={{code: CodeBlock}}
	/>
)

export default md;