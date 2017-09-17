$(document).ready(function () {
	// cuando hacemos click en el icono hambuguesa le agrega la clase open
	$('i.fa-bars').on('click', function () {
		$('nav').css({
			'transition': 'left 500ms ease'
		});
		$('nav').addClass('open');
	})
	// cuando hacemos click en una section cierra la sideBar
	$('section').on('click', function () {
		$('nav').removeClass('open');
	})
});
