$(document).ready(function(){
	$('.slider').slick({
		dots: true,
		autoplay: true,
		speed: 600
	});
}); //Settings slick slider


var days = [
	'Неділя',
	'Понеділок',
	'Вівторок',
	'Середа',
	'Четвер',
	'П`ятниця',
	'Субота'
];
window.onload = function(){
	(function(){
		var date = new Date();
		var time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + "<br>" + date.getDate() + "." + (date.getMonth()+1) + "." + date.getFullYear() + "<br>";
		
		
		var d = date.getDay();
		
		document.getElementById('time').innerHTML = time + days[d];
		window.setTimeout(arguments.callee, 1000);
	})();
	
}; //Day time


// Contact toggle
$( "#el3" ).click(function() { // Перемикач для Contact
	$( ".contact_hidden" ).slideToggle(250).css({display: 'flex'});
});
$(document).mouseup(function (e){ // подія кліку по веб-документу
		var div = $(".contact_hidden, #el3"); // ID за межами якого буде працювати скріпт
		var con_h = $(".contact_hidden");
		if (!div.is(e.target) && div.has(e.target).length === 0) { // якшо клік був не по нашому ID і не по його дочірнім елементам
			con_h.slideUp(); // ховаєм його
		}
	});




//$(window).scroll(function(){
//	if($(window).scrollTop()>500){
//		$('.container2').show()
//	}
//})




