const wrapper = document.querySelector('.wrapper');
const logo = document.querySelector('.intro-text:not(.hidden)');
const otherTexts = document.querySelectorAll('.intro-text.hidden');
const btnScroll = document.querySelector('.button-scroll');

window.addEventListener('load', () => {
    requestAnimationFrame(()=> {
        window.scrollTo(0,0);
        wrapper.classList.add('animate');
    });
    setTimeout(() => {
        logo.classList.add('hidden');
        otherTexts[0] && otherTexts[0].classList.remove('hidden');
        setTimeout(() => {
            otherTexts[0] && otherTexts[0].classList.add('hidden');
            otherTexts[1] && otherTexts[1].classList.remove('hidden');
        }, 6000)
    }, 6000)
});

// TODO: Add transition
btnScroll.addEventListener('click', (evt) => {
    window.scrollTo({top: window.innerHeight, behavior: 'smooth'});
}, false);

// Enable particles.js on the background
particlesJS("particles-js", {"particles":{"number":{"value":200,"density":{"enable":true,"value_area":4655.971085630409}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":3},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1.5782952832645452,"direction":"top","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});

// TODO: Force scroll to top on load
