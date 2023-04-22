$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');  
    });


    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');  

    });


    const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

    window.onscroll = function() {
    scrollFunction();
    };

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
    }

    function scrollToTop() {
    const scrollToTop = window.setInterval(function() {
        const pos = window.pageYOffset;
        if (pos > 0) {
        window.scrollTo(0, pos - 20); // how far to scroll on each step
        } else {
        window.clearInterval(scrollToTop);
        }
    }, 16); // how often to run the scroll animation (in milliseconds)
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);


    
    // smooth scrolling

        // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

});