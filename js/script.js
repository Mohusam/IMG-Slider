let index = 1;
let moveTo = (e) => {
    showSlide(index = e)
}
let changeSlide = (e) => {
    showSlide(index += e)
}
let showSlide = (e) => {
    let images = document.querySelectorAll('img');
    let indicators = document.querySelectorAll('.slider-indicators span');
    let contents = document.querySelectorAll('.slider-content h3');
    
    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
        image.style.transitionDelay = '0.2s';
    }
    for (let indicator of indicators) {
        indicator.style.width = '8px'
        indicator.style.background = '#ffffffaf'
        indicator.style.transitionDelay = '0.2s';

    }
    for (let content of contents) {
        content.style.scale = '0';
        content.style.opacity = '0';
        content.style.transitionDelay = '0.2s';

    }
    images[index-1].style.opacity = '1';
    indicators[index-1].style.width = '26px';
    indicators[index-1].style.background = '#fff';
    contents[index -1].style.scale = '1';
    contents[index -1].style.opacity = '1';
}
showSlide()