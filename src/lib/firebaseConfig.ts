import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyB3R8X27ursemSeayJPqmk2rncr2KzeVoI",
	authDomain: "mywebapp-173ba.firebaseapp.com",
	projectId: "mywebapp-173ba",
	storageBucket: "mywebapp-173ba.appspot.app",
	messagingSenderId: "698308653446",
	appId: "1:698308653446:web:f2f0b7aeec59cb1eb5bc07",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
