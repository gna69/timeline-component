const timeline = document.querySelector('.timeline');
const timelineHeight = document.querySelector('.timeline').dataset.height;

window.onscroll = () => handlerScroll();

const handlerScroll = () => {
    timeline.style.height = window.scrollY + '%';
    console.log(1);
}