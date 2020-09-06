function onClick(element) {
  let src = element.src;
  let big = document.getElementById('big');
  big.src = src.replace('small', 'big');
}

function onImgError() {
  alert('Большая картинка не найдена.');
}
