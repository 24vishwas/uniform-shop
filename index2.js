function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-bottom');
  
    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 100; // adjust this for earlier/later reveal
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add('active');
      } else {
        reveals[i].classList.remove('active'); // remove if you want replay on scroll up
      }
    }
  }
  
  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll); // trigger on load
  const footerLinks = document.querySelectorAll('.footer-links');

// Add click event listener to each footer link
footerLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Toggle the 'visible' class on the clicked element
        this.classList.toggle('visible');
    }); 
});
