// index.js
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
  
    // Select the Download CV button
    const downloadButton = document.querySelector('.btn');
  
    // Add an event listener to the button
    downloadButton.addEventListener('click', () => {
      console.log('Download CV button clicked');
  
      // Add a custom DOM property using dataset
      downloadButton.dataset.clicked = 'true';
      
      // Change the button text to indicate an action
      downloadButton.textContent = 'Downloading...';
  
      // Reset the text after 2 seconds
      setTimeout(() => {
        downloadButton.textContent = 'Download CV';
      }, 2000);
    });
  
    // Add a custom property to the hero heading as an example
    const heroHeading = document.querySelector('#home h1');
    heroHeading.dataset.author = 'Michael Ouma';
    console.log('Hero heading author:', heroHeading.dataset.author);
  });
  