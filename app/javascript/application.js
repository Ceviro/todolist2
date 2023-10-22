// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


 document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.check-box').forEach(function(checkbox) {
    checkbox.addEventListener('change', function() {
      var togglePath = checkbox.dataset.togglePath;
      var csrfToken = document.querySelector('meta[name="csrf-token"]').content;

      fetch(togglePath, {
        method: 'PATCH',
        headers: {
          'X-CSRF-Token': csrfToken,
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.ok ? response.json() : Promise.reject('Request failed'))
      .then(data => {
      })
      .catch(error => console.error('AJAX error:', error));
    });
  });
});

