document.addEventListener('DOMContentLoaded', function () {
  let rotation = 0;
  let min_rotation = 0;
  const day_circle = document.getElementById('day_circle');
  const min_pointer = document.getElementById('pointer');
  const min_dial = document.getElementById('minuet_circle');
  const rotateButton = document.getElementById('rotateButton');
  
  
  min_rotate.addEventListener('click', function () {
    rotation -= 7.5;
    day_circle.style.transform = `rotate(${rotation}deg)`;
  });
  

  h_rotate.addEventListener('click', function () {
    rotation -= 15;
    day_circle.style.transform = `rotate(${rotation}deg)`;
  });

  rotateButton.addEventListener('click', function () {
    rotation -= 0.00416666666;
    min_rotation += 6;
    day_circle.style.transform = `rotate(${rotation}deg)`;
    min_pointer.style.transform = `rotate(${min_rotation}deg)`;
  });
  
});
