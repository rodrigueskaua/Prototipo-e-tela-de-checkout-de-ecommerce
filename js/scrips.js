function encontrarCep() {
  var consultar = document.querySelector('.consultar');
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'block';
  consultar.style.display = 'block';
}


function sairOverlay() {
  var consultar = document.querySelector('.consultar');
  var overlay = document.querySelector('.overlay');
  overlay.style.display = 'none';
  consultar.style.display = 'none';
}