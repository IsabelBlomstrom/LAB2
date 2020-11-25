 /**
  * Function that calls all the other functions on the site
  * Starts when the page is ready
  */
 $(document).ready(function () {
     $(".hiddenUl").hide();
     addEventListeners()
 })


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