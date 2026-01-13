//keyword typing - jQuery version with continuous looping
$(document).ready(function() {
  $(".element").typed({
    strings: [
      "Prince Solomon",
      "a Software Engineer",
      "a Google IT Support Engineer",
      "a Computer & Robotics Engineer"
    ],
    typeSpeed: 80,
    backSpeed: 50,
    backDelay: 800,
    startDelay: 300,
    loop: true,
    loopCount: Infinity,
    showCursor: true,
    cursorChar: '|',
    resetCallback: function() {
      // Reset callback to ensure continuous looping
    }
  });
});

// Background loader fade out
(function() {
  setTimeout(function() {
    var loaderBg = document.querySelector('.loader_bg');
    if (loaderBg) {
      loaderBg.style.opacity = '1';
      loaderBg.style.transition = 'opacity 0.5s ease-out';
      loaderBg.style.opacity = '0';
      setTimeout(function() {
        loaderBg.style.display = 'none';
      }, 500);
    }
  }, 1500);
})();
 
