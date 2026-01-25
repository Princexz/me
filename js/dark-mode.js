/**
 * Dark Mode Toggle Script
 * Manages light/dark mode switching with localStorage persistence
 */

(function() {
    'use strict';

    const THEME_KEY = 'theme-preference';
    const DARK_CLASS = 'dark-mode';

    // Initialize dark mode on page load
    function initDarkMode() {
        // Check saved preference
        const savedTheme = localStorage.getItem(THEME_KEY);
        
        // Check system preference if no saved preference
        let prefersDark = false;
        if (savedTheme) {
            prefersDark = savedTheme === 'dark';
        } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            prefersDark = true;
        }

        // Apply the theme
        if (prefersDark) {
            document.documentElement.classList.add(DARK_CLASS);
            document.body.classList.add(DARK_CLASS);
        }

        createThemeToggle();
        setupThemeListener();
    }

    // Create theme toggle button
    function createThemeToggle() {
        const existingToggle = document.getElementById('theme-toggle-btn');
        if (existingToggle) return;

        const toggleBtn = document.createElement('button');
        toggleBtn.id = 'theme-toggle-btn';
        toggleBtn.className = 'theme-toggle';
        toggleBtn.setAttribute('aria-label', 'Toggle dark mode');
        toggleBtn.setAttribute('title', 'Toggle dark mode');

        updateToggleIcon(toggleBtn);

        toggleBtn.addEventListener('click', function(e) {
            e.preventDefault();
            toggleDarkMode();
        });

        document.body.appendChild(toggleBtn);
    }

    // Update toggle button icon and text
    function updateToggleIcon(btn) {
        const isDarkMode = document.body.classList.contains(DARK_CLASS);
        btn.innerHTML = isDarkMode ? '☀️' : '🌙';
        btn.title = isDarkMode ? 'Switch to light mode' : 'Switch to dark mode';
    }

    // Toggle dark mode
    function toggleDarkMode() {
        const isDarkMode = document.body.classList.contains(DARK_CLASS);
        const newTheme = isDarkMode ? 'light' : 'dark';

        // Update DOM
        if (isDarkMode) {
            document.documentElement.classList.remove(DARK_CLASS);
            document.body.classList.remove(DARK_CLASS);
        } else {
            document.documentElement.classList.add(DARK_CLASS);
            document.body.classList.add(DARK_CLASS);
        }

        // Save preference
        localStorage.setItem(THEME_KEY, newTheme);

        // Update toggle button
        const toggleBtn = document.getElementById('theme-toggle-btn');
        if (toggleBtn) {
            updateToggleIcon(toggleBtn);
        }

        // Dispatch custom event
        window.dispatchEvent(new CustomEvent('themeChange', { 
            detail: { theme: newTheme } 
        }));
    }

    // Listen for system theme changes
    function setupThemeListener() {
        if (window.matchMedia) {
            const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
            
            if (darkModeQuery.addListener) {
                darkModeQuery.addListener(handleSystemThemeChange);
            } else if (darkModeQuery.addEventListener) {
                darkModeQuery.addEventListener('change', handleSystemThemeChange);
            }
        }
    }

    // Handle system theme changes
    function handleSystemThemeChange(e) {
        // Only apply if user hasn't manually set preference
        if (!localStorage.getItem(THEME_KEY)) {
            if (e.matches) {
                document.documentElement.classList.add(DARK_CLASS);
                document.body.classList.add(DARK_CLASS);
            } else {
                document.documentElement.classList.remove(DARK_CLASS);
                document.body.classList.remove(DARK_CLASS);
            }

            const toggleBtn = document.getElementById('theme-toggle-btn');
            if (toggleBtn) {
                updateToggleIcon(toggleBtn);
            }
        }
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initDarkMode);
    } else {
        initDarkMode();
    }

    // Expose API for external control
    window.ThemeToggle = {
        isDark: function() {
            return document.body.classList.contains(DARK_CLASS);
        },
        setDark: function(isDark) {
            if (isDark !== this.isDark()) {
                toggleDarkMode();
            }
        },
        toggle: toggleDarkMode
    };
})();
