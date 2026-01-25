//keyword typing - jQuery version with continuous looping
(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initTyping() {
    var element = document.querySelector('.element');
    
    if (!element) {
      console.warn('Element with class "element" not found');
      return;
    }
    
    // Check if Typed is available
    if (typeof Typed === 'undefined') {
      console.warn('Typed.js not loaded');
      setTimeout(initTyping, 100); // Retry after 100ms
      return;
    }
    
    // Initialize Typed.js
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
      fadeOut: false
    };
    
    // Create new Typed instance
    new Typed(element, options);
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTyping);
  } else {
    initTyping();
  }
})();

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
