/**
 * Portfolio Item Animated Box Outline Enhancement
 * Adds interactive glow effects to portfolio items
 */

document.addEventListener('DOMContentLoaded', function() {
  const portfolioItems = document.querySelectorAll('.item-box');

  portfolioItems.forEach((item) => {
    // Add mouse tracking for glow effect
    item.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Set CSS variables for glow position
      this.style.setProperty('--mouse-x', x + 'px');
      this.style.setProperty('--mouse-y', y + 'px');
    });

    // Add initial animation on load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          item.style.animation = 'fadeInScale 0.6s ease-out forwards';
          observer.unobserve(item);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(item);
  });
});

// Export for use in other scripts
if (typeof window !== 'undefined') {
  window.portfolioAnimations = {
    refreshItems: function() {
      document.querySelectorAll('.item-box').forEach((item) => {
        item.style.animation = 'none';
        setTimeout(() => {
          item.style.animation = '';
        }, 10);
      });
    }
  };
}
