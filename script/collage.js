// Collage image modal logic
window.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('.collage-container img');
  let modal = document.querySelector('.collage-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'collage-modal';
    modal.innerHTML = `
      <button class="collage-modal-close" aria-label="Close">&times;</button>
      <img src="" alt="Enlarged image">
    `;
    document.body.appendChild(modal);
  }
  const modalImg = modal.querySelector('img');
  const closeBtn = modal.querySelector('.collage-modal-close');

  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', function() {
      modalImg.src = img.src;
      modalImg.alt = img.alt;
      modal.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', function() {
    modal.classList.remove('active');
    modalImg.src = '';
  });

  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
      modalImg.src = '';
    }
  });
});
