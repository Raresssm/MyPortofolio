// ===== MOBILE MENU TOGGLE =====
const navToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
const socialNav = document.querySelector('.social-icons-nav');

navToggle.addEventListener('click', () => {
  // Toggle main nav
  if (navLinks.style.transform === 'translateX(0%)') {
    navLinks.style.transform = 'translateX(100%)';
    socialNav.style.transform = 'translateX(100%)';
  } else {
    navLinks.style.transform = 'translateX(0%)';
    socialNav.style.transform = 'translateX(0%)';
  }
});

// ===== SCROLL REVEAL EFFECT =====
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-content').forEach(sec => {
  observer.observe(sec);
});

// ===== TYPING EFFECT IN HERO =====
const typingText = document.getElementById('typing-text');
const words = [
  "Aspiring IT Innovator",
  "Future Software Developer",
  "Tech Enthusiast",
  "Lifelong Learner"
];
let wordIndex = 0;
let letterIndex = 0;
let currentWord = '';
let isDeleting = false;

function typeEffect() {
  currentWord = words[wordIndex];
  if (!isDeleting) {
    typingText.textContent = currentWord.substring(0, letterIndex + 1);
    letterIndex++;
    if (letterIndex === currentWord.length) {
      // Pause before deleting
      setTimeout(() => (isDeleting = true), 1500);
    }
  } else {
    typingText.textContent = currentWord.substring(0, letterIndex - 1);
    letterIndex--;
    if (letterIndex === 0) {
      isDeleting = false;
      wordIndex++;
      if (wordIndex === words.length) {
        wordIndex = 0;
      }
    }
  }
  const speed = isDeleting ? 60 : 90;
  setTimeout(typeEffect, speed);
}

document.addEventListener('DOMContentLoaded', () => {
  typeEffect();
});

// ===== DARK MODE TOGGLE =====
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body element
  document.body.classList.toggle('dark-mode');
});
