// Smooth scroll for internal anchors
document.addEventListener('click', function (e) {
  const target = e.target.closest('a[href^="#"]');
  if (!target) return;
  const id = target.getAttribute('href');
  if (!id || id === '#') return;
  const dest = document.querySelector(id);
  if (!dest) return;
  e.preventDefault();
  dest.scrollIntoView({ behavior: 'smooth', block: 'start' });
  dest.setAttribute('tabindex', '-1');
  dest.focus({ preventScroll: true });
});

// Mobile menu toggle (no-op if button/nav not present)
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('nav[aria-label="Primary"]');
  if (!btn || !nav) return;
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.hidden = expanded;
  });
});

// Video thumbnail click handler - open video in fullscreen modal
document.addEventListener('DOMContentLoaded', function () {
  const thumbnailContainers = document.querySelectorAll('.video-thumbnail-container');
  
  thumbnailContainers.forEach(container => {
    const videoSrc = container.getAttribute('data-video-src');
    if (!videoSrc) return;
    
    // Click handler
    const handleClick = () => {
      // Create modal
      const modal = document.createElement('div');
      modal.className = 'video-modal';
      modal.setAttribute('role', 'dialog');
      modal.setAttribute('aria-label', 'Video player');
      
      // Create video element
      const video = document.createElement('video');
      video.controls = true;
      video.playsinline = true;
      video.src = videoSrc;
      video.autoplay = true;
      
      // Create close button
      const closeBtn = document.createElement('button');
      closeBtn.className = 'video-modal-close';
      closeBtn.innerHTML = '&times;';
      closeBtn.setAttribute('aria-label', 'Close video');
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        closeModal();
      });
      
      // Close modal when clicking outside or pressing Escape
      const closeModal = () => {
        video.pause();
        document.body.removeChild(modal);
        document.body.style.overflow = ''; // Restore scroll
      };
      
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
      
      document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
          closeModal();
          document.removeEventListener('keydown', escHandler);
        }
      });
      
      // Assemble modal
      modal.appendChild(closeBtn);
      modal.appendChild(video);
      document.body.appendChild(modal);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    };
    
    // Add click handlers (mouse and keyboard)
    container.addEventListener('click', handleClick);
    container.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    });
  });
});


