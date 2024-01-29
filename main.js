document.addEventListener('DOMContentLoaded', function () {
  let rotation = 0;
  let min_rotation = 0;
  
  const day_circle = document.getElementById('day_circle');
  const min_pointer = document.getElementById('pointer');
  const min_dial = document.getElementById('minuet_circle');
  
  const rotateButton = document.getElementById('rotateButton');
  const negative_h_rotate = document.getElementById('negative_h_rotate');
  const negative_min_rotate = document.getElementById('negative_min_rotate');

  function updateRotation(degrees) {
    rotation += degrees;
    day_circle.style.transform = `rotate(${rotation}deg)`;
  }

  function updateMinRotation(degrees) {
    min_rotation += degrees;
    min_pointer.style.transform = `rotate(${min_rotation}deg)`;
  }

  document.getElementById('min_rotate').addEventListener('click', function () {
    updateRotation(-7.5);
  });

  document.getElementById('h_rotate').addEventListener('click', function () {
    updateRotation(-15);
  });

  rotateButton.addEventListener('click', function () {
    updateRotation(-0.00416666666);
    updateMinRotation(6);
  });

  negative_h_rotate.addEventListener('click', function () {
    updateRotation(15);
  });

  negative_min_rotate.addEventListener('click', function () {
    updateRotation(7.5);
  });
});
