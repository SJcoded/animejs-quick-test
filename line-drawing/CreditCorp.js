anime({
    targets: '.CreditCorp .💳',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutQuad',
    duration: 5000,
    delay: function(el, i) {
        return i / 500;  
    },
    direction: 'alternate',
    autoplay: true,
    loop: true,
    
  });