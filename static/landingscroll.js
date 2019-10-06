function scrollTo(elementid) {
	element = document.getElementById(elementid)
	element.scrollIntoView({
		behavior: 'smooth'
	});
	if (window.history.replaceState) {
		window.history.replaceState('nottop', '', '/landing/#nottop');
	}
	element.focus();
}

function scrollToNottop() {
	scrollTo('nottop');
}

document.getElementById('scrollToContent').addEventListener('click', scrollToNottop);
