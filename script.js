window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const title1 = document.getElementById('titlebar1');
    const title2 = document.getElementById('titlebar2');

    const scrollPosition = window.scrollY;

    header.style.height = (400 - scrollPosition/1.2) + 'px';
	title1.style.margin = (0 - scrollPosition) + 'px';
});