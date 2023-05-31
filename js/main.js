$('.owl-carousel').owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    autoWidth:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        }
    }
});