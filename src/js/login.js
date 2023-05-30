const form = document.getElementById("form");
import {onAuthStateChanged, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase/firebase.js";

document.addEventListener("DOMContentLoaded", () => {
	onAuthStateChanged(auth, (user) => {
		if (user) {
			location.replace("/");
		}
	});
})

form.addEventListener("submit", async (e) => {
	e.preventDefault();
	const user = form["user"].value;
	const password = form["password"].value;

	try {
		const userCredentials = await signInWithEmailAndPassword(auth, user, password);
		location.replace("/");
	} catch (error) {
		console.log(error);
	}
});


