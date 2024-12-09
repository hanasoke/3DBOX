const cube = document.getElementById('cube');
let isRotating = true;

cube.addEventListener('click', () => {
  if (isRotating) {
    cube.style.animation = 'none';
  } else {
    cube.style.animation = 'rotateCube 6s infinite linear';
  }
  isRotating = !isRotating;
});
