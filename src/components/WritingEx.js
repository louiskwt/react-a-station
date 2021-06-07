import React from 'react';
import { useParams } from 'react-router';

const WritingEx = () => {
	const { id } = useParams();
	console.log(id);
	return <div>Writing Ex</div>;
};

export default WritingEx;
