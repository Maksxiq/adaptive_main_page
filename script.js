// script.js
document.addEventListener('DOMContentLoaded', () => {
    const icons = document.querySelectorAll('.social-media-icons .icon');
    icons.forEach(icon => {
      icon.addEventListener('mouseover', () => {
        icon.style.backgroundColor = '#4caf50';
      });
  
      icon.addEventListener('mouseout', () => {
        icon.style.backgroundColor = '#333';
      });
    });
  });
  