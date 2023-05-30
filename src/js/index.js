import {
	onAuthStateChanged,
	signOut,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
import { auth } from "../firebase/firebase.js";
import { showToast } from "./toastify.js";

document.addEventListener("DOMContentLoaded",()=>{
	onAuthStateChanged(auth, (user) => {
		if (!user) {
			location.replace("pages/login.html");
			console.log("No existe usuario logueado")
		}
		showToast("Bienvenido al panel de Macrocell! 📱", 2000)
	});
})

const logOut = document.getElementById("logOut");
logOut.addEventListener("click", async () => {
	try {
		await signOut(auth);
	} catch (error) {
		console.log(error);
	}
});




