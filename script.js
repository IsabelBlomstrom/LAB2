$(document).ready(function() {

    VANTA.BIRDS({
        el: "#vantajs",
        birdSize: 0.5,
        wingSpan: 15,
        speedLimit: 1.00,
        separation: 60.00,
        cohesion: 30.00
    })


    $(".hiddenUl").hide();

    $('.fa-bars').click(function() {
        $('.hiddenUl').toggle('slow')
    })

})