$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.collapsible').collapsible();
	$('.tabs').tabs({
  		onShow: function(tab) {
    		$('.carousel').carousel({
    			fullWidth: true,
    			noWrap: true,
    			indicators: true
  			});
  		}
	});

	var elem = document.querySelector('.collapsible.expandable');
	var instance = M.Collapsible.init(elem, {
  		accordion: false
	});
});

/* function for changing Project header colours on click */
var prevProjectClickTarget = null;
$('#projects .collapsible-header').click(function(){

	if (this == prevProjectClickTarget && $(this).hasClass('orange lighten-2')) {
		$(this).removeClass('orange lighten-2');
		prevProjectClickTarget = null
	}
	else {
		$('.collapsible-header').removeClass('orange lighten-2');
		$(this).addClass('orange lighten-2');
		prevProjectClickTarget = this;
	}
});

$('#skills .collapsible-header').click( function(){
	$(this).toggleClass('light-blue lighten-2');
});

// move next carousel
$('.moveNextCarousel').click( function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('next');
});

// move prev carousel
$('.movePrevCarousel').click( function(e){
	e.preventDefault();
	e.stopPropagation();
	$('.carousel').carousel('prev');
});