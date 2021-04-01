const timeline = document.querySelector('.timeline');
const timelineHeight = document.querySelector('.timeline').dataset.height;

window.onscroll = () => handlerScroll();

const handlerScroll = () => {
    if(window.scrollY >= timelineHeight) {
        timeline.style.height = timelineHeight + 'px';
    } else {
        timeline.style.height = window.scrollY + 'px';
    }
}