const main = document.getElementById("main");
const form = document.getElementById("form");
const email = document.getElementById("email");

function validateEmail(email) {
	if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
		return true;
	}

	return false;
}

form.addEventListener("submit", (event) => {
	event.preventDefault();
	const emailValue = email.value;

	if (emailValue) {
		const isValid = validateEmail(emailValue);

		if (!isValid) {
			form.classList.add("not-valid");

			setTimeout(() => {
				form.classList.remove("not-valid");
			}, 2000);
		} else {
			main.classList.add("valid-email");
		}
	}
});
