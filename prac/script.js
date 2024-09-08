document.addEventListener('DOMContentLoaded', function() {
  const textElement = document.getElementById('text');

  if (window.location.pathname.endsWith('index.html')) {
      textElement.addEventListener('click', function() {
          // Store the text in localStorage
          localStorage.setItem('text', textElement.innerText);
          // Redirect to the second page
          window.location.href = 'second.html';
      });
  } else if (window.location.pathname.endsWith('second.html')) {
      // Retrieve the text from localStorage
      const text = localStorage.getItem('text');
      // Display the text if it exists
      if (text) {
          textElement.innerText = text;
      }
  }
});
