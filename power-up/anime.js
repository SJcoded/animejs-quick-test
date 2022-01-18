let transferAmount = document.querySelector('.main')
let availableFunds = document.querySelector('.sub')

let balance = {
    money: 5000,
    available: 10000,
}

transferAmount.innerText = '$' + balance.money
availableFunds.innerText = '$' + balance.available + ' Available'

console.log(balance)

const drop_balance = anime({
  targets: balance,
  money: "$0",
  available: "$5000",
  easing: 'easeInOutExpo',
  round: 1,
  update: function() {
    transferAmount.innerText = balance.money
    availableFunds.innerText = balance.available + ' Available'
  },
  autoplay: false,
});

const shrink_card = anime({
  targets: '.purple-credit-card',
  duration: 2000,
  rotate:{
    value: '2deg',
    duration: 2000,
    delay: 200,
  },
  translateY: {
    value: '-30px',
  },
  height: '160px',
  autoplay: false,
})

const animate_arrows = anime({
  targets: '.arrow',

    translateY: function(el, i, l) {
      return  -(l * 10 + (-5 * i));
    },

  delay: anime.stagger(100),
  direction: 'forwards',
  autoplay: false,
})



const power_up = () => {

  drop_balance.play()
  shrink_card.play()
  animate_arrows.play()
}

document.querySelector('.power-up').addEventListener('click', power_up)



// --------FLY_IN_FLIP_EFFECT_V1--------
// anime({
//     targets: '.purple-credit-card',
//     scale: 1.2,
//     translateY: function (el, i) {
//         return anime.random(-100, 100),
//         anime.random(-100, 100)
//     },
//     translateX: "400px",
//     rotateX:"25deg",
//     rotateY: '360deg',
//     rotate: '15deg',
//     duration: 4000,
//     loop: true,
// })


// --------FLY_IN_FLIP_EFFECT_V2_WITH_FLOAT--------
// anime({
//     targets: '.purple-credit-card',
//     scale: {
//       value: 1.05,
//       duration: 10000,
//       easing: "easeInOutElastic(1, 2)",
//     },
//     easing: 'easeOutElastic(0.1, .9)',
//     translateY: {
//       value: 10,
//       easing: 'easeInOutElastic(0.1, .5)',
//       duration: 3000,
//       delay: 200,
//     },
//     translateX: "400px",
//     rotateX:"35deg",
//     rotateY: '360deg',
//     rotate: {
//       value: '10deg',
//       duration: 5000,
//       easing: 'easeInOutElastic(.1, .5)',
//       delay: 0,
//       loop: true,
//     },
//     duration: 3000,
//     loop: true,
// })




// -------FLOATING_CARD_EFFECT_V1---------

// var tl = anime.timeline({
//     duration: 1000,
//     loop: true,
//     easing: 'linear'
// })


// tl.add({
//     targets: '.purple-credit-card',
//     scale: 1.05,
//     translateY: 5,
//     rotate: function (el, i) {
//         return anime.random(-5, 5)
//     },
//     translateX: -7
// }).add({
//     targets: '.purple-credit-card',
//     scale: 1.1,
//     translateY: -11,
//     rotate: function (el, i) {
//         return anime.random(-5, 5)
//     },
//     translateX: -10
// }).add({
//     targets: '.purple-credit-card',
//     scale: 1.05,
//     translateY: 17,
//     rotate: function (el, i) {
//         return anime.random(-5, 5)
//     },
//     translateX: 17
// }).add({
//     targets: '.purple-credit-card',
//     scale: 1,
//     translateY: 0,
//     rotate: 0,
//     translateX: 0
// })


// -------FLOATING_CARD_EFFECT_V2---------
// var tl = anime.timeline({
//     duration: 3000,
//     easing: 'easeOutElastic(0.1, .5)',
//     loop: true
//   })
  
//   tl.add({
//     targets: '.purple-credit-card',
//     scale: 1.2,
//     translateY: function (el, i) {
//         return anime.random(-100, 100),
//         anime.random(-100, 100)
//     },
//     translateX: "400px",
//     rotateX:"45deg",
//     rotateY: '360deg',
//     rotate: '15deg',
//     duration: 2000,
//   }).add({
//     targets: '.purple-credit-card',
//     scale: 1.3,
//     rotate: '5deg',
//     duration: 1000,
//     translateX: "375px",
//     rotateX:"35deg",
//     rotateY: '360deg',
//     easing:"linear",
//   }, "-=700").add({
//     targets: '.purple-credit-card',
//     scale: 1.2,
//     rotate: '15deg',
//     duration: 1000,
//     translateX: "425px",
//     rotateX:"45deg",
//     rotateY: '360deg',
//     easing:"linear", 
//   }).add({
//     targets: '.purple-credit-card',
//     scale: 1.3,
//     rotate: '5deg',
//     duration: 1000,
//     translateX: "375px",
//     rotateX:"25deg",
//     rotateY: '360deg',
//     easing: 'linear',
//   }).add({
//     targets: '.purple-credit-card',
//     scale: 1.2,
//     rotate: '15deg',
//     duration: 1000,
//     translateX: "425px",
//     rotateX:"25deg",
//     rotateY: '360deg',
//     easing: 'linear',
//   })

// -------FLOATING_CARD_EFFECT_V3---------
// var tl = anime.timeline({
//     duration: 3000,
//     easing: 'easeOutElastic(0.1, .5)',
//     loop: true
//   })

//   tl.add({
//     targets: '.purple-credit-card',
//     scale: {
//       value: 1.05,
//       duration: 7000,
//       easing: "easeInOutElastic(1, 2)",
//     },
//     easing: 'easeOutElastic(0.1, .9)',
//     translateY: {
//       value: 10,
//       easing: 'easeInOutElastic(0.1, .5)',
//       duration: 3000,
//       delay: 200,
//     },
//     translateX: "400px",
//     rotateX:"35deg",
//     rotateY: '360deg',
//     rotate: {
//       value: '10deg',
//       duration: 5000,
//       easing: 'easeInOutElastic(.1, .5)',
//       delay: 0,
//       loop: true,
//     },
//     duration: 3000,
//     loop: true,
      
// }).add({
//     targets: '.purple-credit-card',
//     scale: {
//       value: 1.05,
//       duration: 1000,
//       easing: "easeInOutElastic(0.1, 2)", 
//     },
//     rotate: {
//       value: '-10deg',
//       duration: 5000,
//     },
// }, "-=3500")

