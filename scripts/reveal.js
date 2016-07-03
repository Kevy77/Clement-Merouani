$(document).ready(function() {
  flipReveal = {
      delay: 600,
      distance: '100px',
      easing: 'ease-in-out',
      rotate: {
          y: 10
      },
  };
  window.sr = ScrollReveal({
      reset: true
  });
  sr.reveal('.first_home', flipReveal);
  sr.reveal('main.full div.col-md-6', {
      origin: 'right',
      distance: '200px',
      duration: 600
  });
  sr.reveal('main.full div.col-md-4', {
      origin: 'left',
      distance: '200px',
      duration: 600
  });
  sr.reveal('.image_s', {
      origin: 'top',
      distance: '200px',
      duration: 600
  });
});
