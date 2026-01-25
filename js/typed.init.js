//keyword typing - jQuery version with continuous looping
$(document).ready(function() {
  var options = {
    strings: [
      "Prince Solomon",
      "a Full Stack Developer",
      "a Software Engineer",
      "a Google IT Support Engineer",
      "a Computer & Robotics Engineer"
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    startDelay: 500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    smartBackspace: true,
    fadeOut: false,
    resetCallback: function() {
      // Ensure typing continues to loop
    },
    completeCallback: function() {
      // Continue looping after completion
    },
    preStringTyped: function(pos, self) {
      // Callback before string is typed
    },
    onComplete: function(self) {
      // Restart the loop
      self.cursor.style.display = 'none';
      setTimeout(function() {
        self.cursor.style.display = 'block';
      }, 500);
    }
  };
  
  // Initialize Typed.js with enhanced looping
  var typed = new Typed('.element', options);
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
