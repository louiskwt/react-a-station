import React from 'react';
import { useParams } from 'react-router';
import { useReading } from '../hooks/useFirestore';

const ReadingEx = () => {
	const { id } = useParams();
	console.log(id);
	const questions = useReading(id);
	console.log(questions);
	return (
		<div>
			<h1>Reading Ex</h1>
		</div>
	);
};

export default ReadingEx;
