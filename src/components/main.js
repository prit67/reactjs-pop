import $ from 'jquery'; 

$('.navbar-nav>li>Link').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});