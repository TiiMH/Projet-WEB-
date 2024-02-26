document.addEventListener'DOMContentLoaded', function ()  
  const carrousel = document.querySelector('.carrousel');
  const carrouselItems = document.querySelectorAll('.carrousel-item');
  const containerCarrousel = document.querySelector('.container-carrousel');

  let isDown = false;
  let startX;
  let scrollLeft

