let tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000,
    loop: true
});

tl.add({
    targets: 'section div',
    backgroundColor: 'rgb(197, 197, 255)',
    delay: anime.stagger(100)
})

tl.add({
    targets: 'section div',
    width: '90%',
    delay: anime.stagger(100)
})

tl.add({
    targets: 'h1',
    top: '10%',
    opacity: 1,
    duration: 2000,
    // delay: anime.stagger(100)
}, '-=1600')

let rotate = anime({
    targets: 'section',
    scaleY: '2',
    scaleX: '2',
    translateX: '40%',
    rotate: '45deg',
    duration: 5000,
    autoplay: false,
    
})

// Make it rotate!
// document.querySelector('section').addEventListener('mouseenter', () => {
//     rotate.play();
// })