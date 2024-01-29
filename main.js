document.addEventListener('DOMContentLoaded', function () {
  let rotation = parseFloat(localStorage.getItem('rotation')) || 0;
  let min_rotation = parseFloat(localStorage.getItem('min_rotation')) || 0;

  const day_circle = document.getElementById('day_circle');
  const min_pointer = document.getElementById('pointer');

  updateRotation(0);
  updateMinRotation(0);

  function updateRotation(degrees) {
    rotation += degrees;
    day_circle.style.transform = `rotate(${rotation}deg)`;
    localStorage.setItem('rotation', rotation.toString());
  }

  function updateMinRotation(degrees) {
    min_rotation += degrees;
    min_pointer.style.transform = `rotate(${min_rotation}deg)`;
    localStorage.setItem('min_rotation', min_rotation.toString());
  }

  function checkLocalStorageChanges() {
    const newRotation = parseFloat(localStorage.getItem('rotation')) || 0;
    const newMinRotation = parseFloat(localStorage.getItem('min_rotation')) || 0;

    if (newRotation !== rotation) {
      rotation = newRotation;
      day_circle.style.transform = `rotate(${rotation}deg)`;
    }

    if (newMinRotation !== min_rotation) {
      min_rotation = newMinRotation;
      min_pointer.style.transform = `rotate(${min_rotation}deg)`;
    }
  }

  setInterval(checkLocalStorageChanges, 1000); // Check every second for changes

  document.getElementById('min_rotate').addEventListener('click', function () {
    updateRotation(-7.5);
  });

  document.getElementById('h_rotate').addEventListener('click', function () {
    updateRotation(-15);
  });

  document.getElementById('rotateButton').addEventListener('click', function () {
    updateRotation(-0.00416666666);
    updateMinRotation(6);
  });

  document.getElementById('negative_h_rotate').addEventListener('click', function () {
    updateRotation(15);
  });

  document.getElementById('negative_min_rotate').addEventListener('click', function () {
    updateRotation(7.5);
  });
});
