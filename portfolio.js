// Intersection Observer for fading in sections and social sidebar
const sections = document.querySelectorAll('section');
const socialSidebar = document.querySelector('.social-sidebar');
const projects = document.querySelectorAll('.project');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all sections and project cards
sections.forEach(section => {
  observer.observe(section);
});
projects.forEach(project => {
  observer.observe(project);
});

// Fade-in for the social sidebar
if (socialSidebar) {
  observer.observe(socialSidebar);
}




