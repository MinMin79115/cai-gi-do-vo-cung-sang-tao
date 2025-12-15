// Theme Toggle Script
(function() {
    'use strict';
    
    // Get theme from localStorage or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme on page load
    if (currentTheme === 'light') {
        document.documentElement.classList.add('light-theme');
    }
    
    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggleBtn = document.getElementById('theme-toggle');
        
        if (!themeToggleBtn) {
            console.warn('Theme toggle button not found');
            return;
        }
        
        // Update button icon based on current theme
        updateThemeIcon();
        
        // Add click event listener
        themeToggleBtn.addEventListener('click', function() {
            toggleTheme();
        });
        
        function toggleTheme() {
            const html = document.documentElement;
            const isLight = html.classList.contains('light-theme');
            
            if (isLight) {
                // Switch to dark theme
                html.classList.remove('light-theme');
                localStorage.setItem('theme', 'dark');
            } else {
                // Switch to light theme
                html.classList.add('light-theme');
                localStorage.setItem('theme', 'light');
            }
            
            updateThemeIcon();
        }
        
        function updateThemeIcon() {
            const html = document.documentElement;
            const isLight = html.classList.contains('light-theme');
            const icon = themeToggleBtn.querySelector('i');
            
            if (icon) {
                if (isLight) {
                    // Show moon icon (dark mode available)
                    icon.className = 'fa fa-moon';
                } else {
                    // Show sun icon (light mode available)
                    icon.className = 'fa fa-sun';
                }
            }
        }
    });
})();
