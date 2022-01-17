anime({
    targets: '.arrow',
  
      translateY: function(el, i, l) {
        return  -(l * 10 + (-5 * i));
      },
  
    delay: anime.stagger(100),
      loop: true,
    direction: 'alternate',
})

// anime({
//     targets: '.purple-credit-card',
//     scale: 1.2,
//     translateY: function (el, i) {
//         return anime.random(-100, 100),
//         anime.random(-100, 100)
//     },
//     rotate: function (el, i) {
//         return anime.random(-360, 360)
//     },
//     duration: 2000,
//     loop: true,
// })

var tl = anime.timeline({
    duration: 1000,
    loop: true,
    easing: 'linear'
})

anime.suspendWhenDocumentHidden = false;

tl.add({
    targets: '.purple-credit-card',
    scale: 1.05,
    translateY: 5,
    rotate: function (el, i) {
        return anime.random(-5, 5)
    },
    translateX: -7
}).add({
    targets: '.purple-credit-card',
    scale: 1.1,
    translateY: -11,
    rotate: function (el, i) {
        return anime.random(-5, 5)
    },
    translateX: -10
}).add({
    targets: '.purple-credit-card',
    scale: 1.05,
    translateY: 17,
    rotate: function (el, i) {
        return anime.random(-5, 5)
    },
    translateX: 17
}).add({
    targets: '.purple-credit-card',
    scale: 1,
    translateY: 0,
    rotate: 0,
    translateX: 0
})