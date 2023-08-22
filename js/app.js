$(document).ready(function () {

    // en-mainslider

    $('#en-mainslider').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        dots: false,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: false,
        smartSpeed: 1000,
        navText: ['PREV', 'NEXT'],
        responsiveClass: true,
        responsive: {
            0: {
                nav: false
            },
            768: {
                nav: true
            }
        }
    });

    // project-slider

    $('#en-project-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        navText: ["NEXT", "PREV"],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                margin: 0,
            },
            768: {
                items: 3,
                center: true,
                dots: true,            },
            1140: {
                items: 3,
                center: true,
                dots: false,
            }
        }
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 800,
    })

    const overlay = document.querySelector(".overlay");
    const form = document.querySelector("form"),
        name = form.querySelector("#name"),
        email = form.querySelector("#email"),
        msg = form.querySelector("#msg");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        submitForm(name.value, email.value, msg.value)
    })

    function submitForm(name, email, msg) {
        fetch("https://formsubmit.co/ajax/stechblogger@gmail.com", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Name: name,
                Email: email,
                Message: msg
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success === "true") {
                    overlay.style.display = "flex";
                    overlay.addEventListener("click", () => {
                        overlay.style.display = "none";

                    })
                    form.reset();
                }
            })
            .catch(error => console.log(error));
    }


});
document.addEventListener('DOMContentLoaded', function () {
    let splide = new Splide('.splide-main', {
        type: 'fade',
        heightRatio: 0.5,
        pagination: false,
        arrows: true,
        cover: true,
    });
    let splideThumbnail = new Splide('.splide-thumbnail', {
        rewind: true,
        fixedWidth: 104,
        fixedHeight: 58,
        isNavigation: true,
        gap: 10,
        focus: 'center',
        pagination: false,
        cover: true,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints: {
            640: {
                fixedWidth: 66,
                fixedHeight: 38,
            },
        },
    });
    splide.sync(splideThumbnail);
    splide.mount();
    splideThumbnail.mount();
});