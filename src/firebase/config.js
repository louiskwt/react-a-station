import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyBU5ZW_WN6IP-4cKgZLXNEOeIoRsxAIJWg',
	authDomain: 'a-station.firebaseapp.com',
	projectId: 'a-station',
	storageBucket: 'a-station.appspot.com',
	messagingSenderId: '985513984024',
	appId: '1:985513984024:web:f4e4975423c3c57f05036d'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
