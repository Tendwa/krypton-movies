$(document).ready(function(){
  $('.slider-one').slick({
  dots: false,
  autoplay: true,
  autoplayspeed: 1500,
  fade: true,
  fadespeed: 1000,      
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  prevArrow: ".site-slider .slider-btn .prev", 
  nextArrow: ".site-slider .slider-btn .next",       
}); 
        });