$(document).ready(function(){
	// $('.header-burger').click(function(){
	// 	$('.header-burger-list').toggleClass('active');
	// 	alert("Привет");
	// });
	$('.header-burger').click(function(){
		$('.header-burger-list').slideToggle().toggleClass('active');
		$('.header-burger').toggleClass('active');
	});
	$('.header-input').click(function(){
		$('.header-form').slideToggle().toggleClass('active');
	});
	$('.filter-list').click(function(){
		$(this).next('.filter-list-wrapper').slideToggle();
		$(this).children('.filter-img').attr('src', 'img/arrow-up.png')
	});
	$('.main-filter').click(function(){
		$('.filter-second-list').slideToggle().toggleClass('active');
	});
	$('.hotel-burger').click(function(){
		$(this).next('.hotel-burger-info').slideToggle();
		$(this).children('.filter-img').attr('src', 'img/arrow-up.png')
	});
	$('.hotel-btn-wrapper').click(function(){
		$(this).prev('.ul-hotel-cost').slideToggle();
		$('.hotel-btn-wrapper').toggleClass('active');
		$('.hotel-btn').toggleClass('active')
	});
});
ymaps.ready(init);
function init(){
	var map = new ymaps.Map('map',{
		center: [59.94, 30.32],
		zoom: 13,
		controls: ['zoomControl']
	});


	var placemark = new ymaps.Placemark( [59.94, 30.32],{
		hintContent: '<div class="map-hint"> Инвест торги</div><div class="map-hint-text">Закрыто на вход</div>'
	},
	{
		iconLayout: 'default#image',
		iconImageHref: '../img/AIrplanes.png',
		iconImageSize: [20, 25]
	});
	map.geoObjects.add(placemark);
}