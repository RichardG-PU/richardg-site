import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDaaHrXQEL7rARAwf418Y3gLKM7aU2WpEQ",
	authDomain: "personnal-website-richie-g.firebaseapp.com",
	projectId: "personnal-website-richie-g",
	storageBucket: "personnal-website-richie-g.appspot.com",
	messagingSenderId: "135898591541",
	appId: "1:135898591541:web:8eb6684075c55355175c7c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };