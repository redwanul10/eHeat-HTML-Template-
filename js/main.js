$(document).ready(function () {

    // Start Rating
    $(".rating").rate({
        step_size: 5,
        readonly: true,
    });

    // Slider
    $('.slider_area').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 2000,
    });

    // Fefatured Products Slider
    $('.featured_products').slick({
        slidesToShow: 3,
        dots: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Testimonial Slider
    $('.testimonial_slider').slick({
        slidesToShow: 1,
        dots: false,
    });

    // Video Popup

    $(".video_popup").modalVideo();


    // Toggle Menu

    $('.menu_icon').on('click', () => {
        $('.menu_content > .mobile_menu').toggleClass('active')
    })


    $('[data-control]').on('click', (e) => {
        e.preventDefault()
    })

    // Menu Accordion
    $('[data-accordion]').accordion();


    let appended = true
    const wrapMenuInsideContainer = () => {
        // const mainMenu = $('.menu_content > .menu')
        const windowSize = window.innerWidth

        if (992 >= windowSize) {

            $('.menu_content > .menu').wrap('<div class="mobile_menu"></div>')
            $('.menu_content >.mobile_menu> .menu').addClass('container')
        } else if (appended) {
            $('.menu_content >.mobile_menu> .menu').removeClass('container')
            $('.menu_content >.mobile_menu> .menu').unwrap()

        }
    }


    wrapMenuInsideContainer()
    $(window).on('resize', wrapMenuInsideContainer)

});