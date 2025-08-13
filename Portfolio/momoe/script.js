// ===== Parallax: translate layers on scroll =====
console.log('Parallax script loaded');   
document.addEventListener('scroll', () => {
  const parallaxLayers = document.querySelectorAll('.parallax-layer');
  parallaxLayers.forEach(layer => {
    const speed = layer.getAttribute('data-speed');
    const yPos = window.scrollY * speed;
    layer.style.transform = `translateY(${yPos}px)`;
  });
});

// Reveal Animation
const revealElements = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

revealElements.forEach(element => {
  observer.observe(element);
});

// Animate skill bars when visible
document.addEventListener('DOMContentLoaded', () => {
  const skillBars = document.querySelectorAll('.bar i');
  skillBars.forEach(bar => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        bar.style.width = bar.getAttribute('data-width');
        observer.disconnect();
      }
    });
    observer.observe(bar);
  });
});

// Job title rotation animation
document.addEventListener("DOMContentLoaded", () => {
  const jobTitles = [
    "Full-stack Developer — Web & Cloud",
    "Backend Developer — Node & Kotlin", 
    "Frontend Developer — React & Next.js",
    "Data Scientist — Python & ML",
    "DevOps Engineer — Docker & CI/CD"
  ];

  const jobTitleElement = document.getElementById("job-title");
  let index = 0;

  function changeJobTitle() {
    // fade out
    jobTitleElement.style.opacity = 0;

    setTimeout(() => {
      index = (index + 1) % jobTitles.length;
      jobTitleElement.textContent = jobTitles[index];
      // fade in
      jobTitleElement.style.opacity = 1;
    }, 400);
  }

  setInterval(changeJobTitle, 3000); // เปลี่ยนทุก 3 วินาที
});

// Enhanced GitHub card interactions
document.addEventListener('DOMContentLoaded', () => {
  const githubCard = document.querySelector('.github-card');
  const githubBtn = document.querySelector('.github-btn');
  
  if (githubCard) {
    // Add mouse move effect for GitHub card
    githubCard.addEventListener('mousemove', (e) => {
      const rect = githubCard.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      githubCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px) scale(1.01)`;
    });
    
    githubCard.addEventListener('mouseleave', () => {
      githubCard.style.transform = '';
    });
  }
  
  // GitHub button click effect
  if (githubBtn) {
    githubBtn.addEventListener('click', (e) => {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = githubBtn.getBoundingClientRect();
      const size = Math.max(rect.height, rect.width);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;
      
      ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
      `;
      
      githubBtn.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  }
});

// Add dynamic CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
  @keyframes ripple {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }
  
  .github-btn {
    position: relative;
    overflow: hidden;
  }
`;
document.head.appendChild(style);

// Add typing effect to GitHub description
document.addEventListener('DOMContentLoaded', () => {
  const githubDesc = document.querySelector('.github-content p');
  if (githubDesc) {
    const originalText = githubDesc.textContent;
    githubDesc.textContent = '';
    
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        typeText(githubDesc, originalText, 30);
        observer.disconnect();
      }
    });
    
    observer.observe(githubDesc);
  }
});

function typeText(element, text, delay) {
  let index = 0;
  
  function type() {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, delay);
    }
  }
  
  type();
}

// Add smooth scroll behavior for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add loading animation for GitHub stats
document.addEventListener('DOMContentLoaded', () => {
  const statItems = document.querySelectorAll('.stat-item');
  
  statItems.forEach((item, index) => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(() => {
          item.style.animation = `slideInFromLeft 0.6s ease forwards`;
        }, index * 200);
        observer.disconnect();
      }
    });
    
    observer.observe(item);
  });
});

// Add slide in animation
const slideStyle = document.createElement('style');
slideStyle.textContent = `
  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  .stat-item {
    opacity: 0;
  }
`;
document.head.appendChild(slideStyle);

// Add particle effect to GitHub icon on hover
document.addEventListener('DOMContentLoaded', () => {
  const githubIcon = document.querySelector('.github-icon');
  
  if (githubIcon) {
    githubIcon.addEventListener('mouseenter', () => {
      createParticles(githubIcon);
    });
  }
});

function createParticles(container) {
  for (let i = 0; i < 6; i++) {
    const particle = document.createElement('div');
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      pointer-events: none;
      animation: particleFloat 1.5s ease-out forwards;
      top: 50%;
      left: 50%;
    `;
    
    container.appendChild(particle);
    
    setTimeout(() => {
      particle.remove();
    }, 1500);
  }
}

// Add particle animation
const particleStyle = document.createElement('style');
particleStyle.textContent = `
  @keyframes particleFloat {
    0% {
      opacity: 1;
      transform: translate(-50%, -50%) scale(0);
    }
    100% {
      opacity: 0;
      transform: translate(-50%, -50%) translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px) scale(1);
    }
  }
`;
document.head.appendChild(particleStyle);