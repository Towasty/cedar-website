const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
	if (window.pageYOffset > 300) {
		if (!backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnExit");
			backToTopButton.classList.add("btnEntrance");
			backToTopButton.style.display = "block";
		}

	}
	else{
		if (backToTopButton.classList.contains("btnEntrance")) {
			backToTopButton.classList.remove("btnEntrance");
			backToTopButton.classList.add("btnExit");
			setTimeout(function() {
				backToTopButton.style.display = "none";
			}, 250);
		}
	}
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
	window.scrollTo(0,0);
}