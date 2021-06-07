import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
	const [docs, setDocs] = useState([]);

	useEffect(() => {
		const unsub = projectFirestore
			.collection(collection)
			.onSnapshot((snap) => {
				let documents = [];
				snap.forEach((doc) => {
					documents.push({ ...doc.data(), id: doc.id });
				});
				setDocs(documents);
			});
		// cleanup function
		return () => unsub();
	}, [collection]);

	return { docs };
};

const useReading = (title) => {
	const [questions, setQuestions] = useState({});

	useEffect(() => {
		const unsub = projectFirestore
			.collection('reading')
			.where('title', '==', title)
			.onSnapshot((snap) => {
				setQuestions(snap.docs[0].data());
			});
		// cleanup function
		return () => unsub();
	}, [title]);

	return { questions };
};

export { useFirestore, useReading };
