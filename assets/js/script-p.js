const parallax = document.querySelector('.page-intro__photo-wrapper img');
	window.addEventListener("scroll", function() {
	let offset = window.pageYOffset;
	parallax.style.transform = "translateY(" + offset * 0.015 + "%";
});