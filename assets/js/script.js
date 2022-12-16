document.addEventListener('DOMContentLoaded', () => {
    const els = document.getElementsByClassName('preloader');
    for (const el of els) {
        el.classList.remove('preloader');
    }

    function parallax() {
        const rellax = new Rellax('[data-rellax-speed]');
    }
    parallax();

    // brandCarousel fix
    function brandCarousel() {
        new Swiper('.brand-carousel', {
            spaceBetween: 0,
            speed: 1000,
            loop: true,
            autoplay: {
                delay: 3000
            },
            breakpoints: {
                0: {
                    slidesPerView: 2,
                    spaceBetween: 0
                },
                640: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 0
                },
                991: {
                    slidesPerView: 5,
                    spaceBetween: 0
                }
            }
        });
    }
    brandCarousel();

    function aosAnim() {
        console.log('aos anim')
        AOS.init({
            duration: 600,
            once: true
        });
    }
    setTimeout(function(){
        aosAnim();
    },100);
})