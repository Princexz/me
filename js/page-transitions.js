/**
 * Beautiful Page Transitions and Animations
 * Handles smooth page transitions, scroll reveals, and interactive effects
 */

(function() {
  'use strict';

  // Scroll Reveal Observer
  function initScrollReveal() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optionally unobserve after revealing
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all scroll-reveal elements
    document.querySelectorAll('.scroll-reveal').forEach(function(el) {
      observer.observe(el);
    });

    // Also observe sections and items for automatic reveal
    document.querySelectorAll('.item-box, .service-box, .team-member').forEach(function(el) {
      if (!el.classList.contains('scroll-reveal')) {
        el.classList.add('scroll-reveal');
        observer.observe(el);
      }
    });
  }

  // Smooth Anchor Link Navigation
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
          e.preventDefault();
          
          const target = document.querySelector(href);
          const offsetTop = target.offsetTop - 80;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  // Navigation Link Active State
  function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(function(section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(function(link) {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
          link.classList.add('active');
        }
      });
    });
  }

  // Parallax Effect
  function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax-bg');
    
    if (parallaxElements.length > 0 && window.innerWidth > 768) {
      window.addEventListener('scroll', function() {
        parallaxElements.forEach(function(el) {
          const scrollY = window.scrollY;
          const elementOffset = el.offsetTop;
          const distance = scrollY - elementOffset;
          
          if (distance > -window.innerHeight && distance < window.innerHeight * 2) {
            el.style.backgroundPosition = 'center ' + (distance * 0.5) + 'px';
          }
        });
      });
    }
  }

  // Page Transition Effect
  function initPageTransitions() {
    // Add transition effect when clicking navigation links
    document.querySelectorAll('.nav-link, a[href^="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Only apply transition if clicking external links
        if (href && !href.startsWith('#') && !href.startsWith('javascript:')) {
          const overlay = document.createElement('div');
          overlay.className = 'page-transition-overlay';
          overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #576ee0 0%, #a78bfa 100%);
            z-index: 10000;
            animation: transitionSlide 0.5s ease-in-out;
          `;
          
          document.body.appendChild(overlay);
          
          // Remove overlay after transition
          setTimeout(function() {
            overlay.remove();
          }, 1000);
        }
      });
    });
  }

  // Stagger Animation for Grid Items
  function initStaggerAnimation() {
    const gridItems = document.querySelectorAll('.item-box, .service-box');
    
    gridItems.forEach(function(item, index) {
      if (!item.style.animationDelay) {
        item.style.animationDelay = (index * 0.1) + 's';
      }
    });
  }

  // Counter Animation for Statistics
  function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    
    counters.forEach(function(counter) {
      const target = parseInt(counter.getAttribute('data-count'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = function() {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };

      // Start animation when element is in view
      const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            updateCounter();
            observer.unobserve(counter);
          }
        });
      });

      observer.observe(counter);
    });
  }

  // Text Letter Animation
  function animateTextLetters() {
    const textElements = document.querySelectorAll('.animate-text');
    
    textElements.forEach(function(el) {
      const text = el.textContent;
      el.innerHTML = '';
      
      Array.from(text).forEach(function(letter, index) {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = (index * 0.05) + 's';
        span.style.animation = 'letterFadeIn 0.5s ease-out forwards';
        el.appendChild(span);
      });
    });
  }

  // Add letter fade in animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes letterFadeIn {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  document.head.appendChild(style);

  // Initialize all animations when DOM is ready
  function init() {
    initScrollReveal();
    initSmoothScroll();
    initNavigation();
    initParallax();
    initPageTransitions();
    initStaggerAnimation();
    animateCounters();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for external use
  window.PageTransitions = {
    initScrollReveal: initScrollReveal,
    initParallax: initParallax,
    animateCounters: animateCounters
  };
})();
