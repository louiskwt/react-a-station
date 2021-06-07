import React from 'react';
import { useParams } from 'react-router';

const ReadingEx = () => {
	const { id } = useParams();
	console.log(id);
	return (
		<div>
			<h1>Reading Ex</h1>
		</div>
	);
};

export default ReadingEx;
