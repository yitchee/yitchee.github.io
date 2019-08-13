$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.collapsible').collapsible();
	$('.tabs').tabs();

	var elem = document.querySelector('.collapsible.expandable');
	var instance = M.Collapsible.init(elem, {
  		accordion: false
	});
});

/* function for changing Project header colours on click */
var prevProjectClickTarget = null;
$('#projects .collapsible-header').click(function(){
	if (this == prevProjectClickTarget && $(this).hasClass('orange lighten-1')) {
		$(this).removeClass('orange lighten-1');
		prevProjectClickTarget = null
	}
	else {
		$('.collapsible-header').removeClass('orange lighten-1');
		$(this).addClass('orange lighten-1');
		prevProjectClickTarget = this;
	}
});

$('#skills .collapsible-header').click(function(){
	if ($(this).hasClass('light-blue lighten-2')) {
		$(this).removeClass('light-blue lighten-2');
	}
	else {
		$(this).addClass('light-blue lighten-2');
	}
});