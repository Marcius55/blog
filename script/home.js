function showSidebar() {
          const sidebar = document.querySelector('.sidebar');
          sidebar.style.display = 'flex';
        }

        function hideSidebar() {
          const sidebar = document.querySelector('.sidebar');
          sidebar.style.display = 'none';
        }

        document.addEventListener("DOMContentLoaded", function() {
  const blogCards = document.querySelectorAll('.blog-container');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      } else {
        entry.target.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.2 });

  blogCards.forEach(card => observer.observe(card));
});

function copyToClipboard(id) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("IBAN copied to clipboard!");
  });
}

document.getElementById('logo-home').onclick = function() {
  window.location.href = 'home.html';
};


