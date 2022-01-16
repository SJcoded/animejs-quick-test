let updates = 0

let ripple = anime({
    targets: '.ripple-div',
    scale: [
        { value: .1, easing:'easeOutSine', duration: 500 },
        { value: 1, easing:'easeInOutQuad', duration: 1200 }
    ],
    delay:anime.stagger(200, {grid: [40, 20], from: 'center'}),
    loop: true,
    update: function(anim) {
        updates++
        console.log(Math.floor(anim.progress) + '%') 
    }
})