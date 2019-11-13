 /**
  * Function that calls all the other functions on the site
  * Starts when the page is ready
  */
 $(document).ready(function () {
     backgroundAnimation()
     $(".hiddenUl").hide();
     addEventListeners()
 })

 /**
  * Holds the object for the background animation
  */
 function backgroundAnimation() {
     VANTA.BIRDS({
         el: "#vantajs",
         birdSize: 0.5,
         wingSpan: 15,
         speedLimit: 1.00,
         separation: 60.00,
         cohesion: 30.00
     })
 }

/**
 * Handles the events that shows/hides the hidden UL when clicked
 * and/or mouse leaves
 */
 function addEventListeners() {
     $('.fa-bars').click(function () {
         $('.hiddenUl').toggle('slow')
     })
 
     $('.hiddenUl').mouseleave(function () {
         $(".hiddenUl").hide();
     })
 }