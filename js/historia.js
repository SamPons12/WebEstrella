function openImage(src) {
  document.getElementById('popup-img').src = src;
  document.getElementById('popup').style.display = 'block';
}
function closeImage() {
  document.getElementById('popup').style.display = 'none';
}