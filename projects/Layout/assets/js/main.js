// Define the opening and closing of sidebar
let menuButton = document.getElementById('button-menu');
let sidebar = document.getElementById('sidebar');
let sidebarOverlay = document.getElementById('sidebar-overlay');
menuButton.addEventListener('click', function() {
	sidebar.classList.add('is-active');
	sidebarOverlay.classList.add('is-active');
});
document.addEventListener('click', function(e) {
	if (sidebar !== e.target && !sidebar.contains(e.target)) {
		if (menuButton !== e.target && !menuButton.contains(e.target)) {
			sidebar.classList.remove('is-active');
			sidebarOverlay.classList.remove('is-active');
		}
	}
});
