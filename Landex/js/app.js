window.addEventListener("scroll",function(){

    let header = document.querySelector("nav")

    header.classList.toggle("sticky", window.scrollY > 0)
})


function myFunction(){

    let  navbar = document.getElementById("navbar")

    navbar.style.backgroundColor="#111"

}

$('#owl-carousel1').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    center:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})


