$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            1100:{
                items:3,
                nav:true,
            },
            1400:{
                items:4,
                nav:true,
                loop:false
            }
        }
    });
});

// slick js
$(document).ready(function(){
    $('.brand-logo').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        puseOnHover: false,
        // responsive: [{
        //     breakpoint: 768,
        //     settings:{
        //         slidesToShow: 4
        //     }
        // },{
        //     breakpoint: 576,
        //     settings:{
        //         slidesToShow: 3
        //     }
        // }]
        
    });
});

// =========== for grid and list view =================

const itenList = document.querySelector('.list-item');
const gridViewBtn = document.getElementById('grid-active-btn');
const listActiveBtn = document.getElementById('list-active-btn');

    gridViewBtn.classList.add('active-btn');

        gridViewBtn.addEventListener('click', () => {
            gridViewBtn.classList.add('active-btn');
            listActiveBtn.classList.remove('active-btn');
            itenList.classList.remove('details-active');
        });

        listActiveBtn.addEventListener('click', () => {
            listActiveBtn.classList.add('active-btn');
            gridViewBtn.classList.remove('active-btn');
            itenList.classList.add('details-active');
        });