$(document).ready(function() {

VANTA.BIRDS({
    el: "#vantajs",
    birdSize: 0.5,
    wingSpan: 2.00,
    speedLimit: 1.00,
    separation: 60.00,
    cohesion: 30.00
  })
  

  $( "nav" ).hide();

  $('.fa-bars').click(function(){
      $('nav').toggle('slow')
  })

});

 
  
  