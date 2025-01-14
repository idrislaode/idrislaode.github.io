/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll

document.addEventListener("DOMContentLoaded", function() {
    let titleText = "Idrislaode - Robotics AI IoT Enthusiast | ";
    let position = 0;

    function scrollTitle() {
        document.title = titleText.substring(position) + titleText.substring(0, position);
        position = (position + 1) % titleText.length;
        setTimeout(scrollTitle, 200); // Sesuaikan kecepatan scrolling (dalam ms)
    }

    scrollTitle();
});

$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});