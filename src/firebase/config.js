import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCV3N0s8ZLa3YywLk9v_ML0PSOYr75QMGQ',
	authDomain: 'ecommerce-cifre.firebaseapp.com',
	projectId: 'ecommerce-cifre',
	storageBucket: 'ecommerce-cifre.appspot.com',
	messagingSenderId: '1040210655008',
	appId: '1:1040210655008:web:a0cc04262f0442b2c94945',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
	return app;
};
