/**
 * Contact Form Enhancements - Simplified
 * Adds subtle animations and interactions to contact boxes and form
 */

(function() {
  'use strict';

  // Initialize contact form enhancements
  function initContactForm() {
    const form = document.getElementById('contact-form');
    const inputs = document.querySelectorAll('.form-control');

    // Add subtle focus effect to inputs
    if (inputs.length > 0) {
      inputs.forEach(function(input) {
        input.addEventListener('focus', function() {
          this.style.transition = 'all 0.3s ease';
        });

        input.addEventListener('blur', function() {
          this.style.transition = '';
        });
      });
    }
  }

  // Animate contact boxes on scroll
  function initContactBoxAnimation() {
    const contactBoxes = document.querySelectorAll('.contact-desc');
    
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry, index) {
        if (entry.isIntersecting) {
          entry.target.style.animation = `itemSlideIn 0.6s ease-out ${index * 0.1}s forwards`;
          entry.target.style.opacity = '0';
          setTimeout(function() {
            entry.target.style.opacity = '1';
          }, index * 100);
        }
      });
    }, observerOptions);

    contactBoxes.forEach(function(box) {
      observer.observe(box);
    });
  }

  // Simple form validation
  function initFormValidation() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const subjectInput = form.querySelector('#subject');
    const commentsInput = form.querySelector('#comments');

    if (form) {
      form.addEventListener('submit', function(e) {
        let isValid = true;

        // Validate name
        if (nameInput && !nameInput.value.trim()) {
          addError(nameInput, 'Name is required');
          isValid = false;
        } else if (nameInput) {
          removeError(nameInput);
        }

        // Validate email
        if (emailInput && !emailInput.value.trim()) {
          addError(emailInput, 'Email is required');
          isValid = false;
        } else if (emailInput && !isValidEmail(emailInput.value)) {
          addError(emailInput, 'Please enter a valid email');
          isValid = false;
        } else if (emailInput) {
          removeError(emailInput);
        }

        // Validate subject
        if (subjectInput && !subjectInput.value.trim()) {
          addError(subjectInput, 'Subject is required');
          isValid = false;
        } else if (subjectInput) {
          removeError(subjectInput);
        }

        // Validate comments
        if (commentsInput && !commentsInput.value.trim()) {
          addError(commentsInput, 'Message is required');
          isValid = false;
        } else if (commentsInput) {
          removeError(commentsInput);
        }

        if (!isValid) {
          e.preventDefault();
        }
      });
    }
  }

  // Add error styling
  function addError(input, message) {
    input.style.borderColor = '#ef4444';
    input.style.background = 'rgba(239, 68, 68, 0.1)';
    input.title = message;
  }

  // Remove error styling
  function removeError(input) {
    input.style.borderColor = '';
    input.style.background = '';
    input.title = '';
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Initialize all functions
  function init() {
    initContactForm();
    initContactBoxAnimation();
    initFormValidation();
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Expose API for external use
  window.ContactEnhancements = {
    validateEmail: isValidEmail,
    initContactForm: initContactForm
  };
})();
