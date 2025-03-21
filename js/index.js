document.getElementById("corazon").addEventListener("click", function() {
  document.getElementById("mensaje").style.display = "flex";
  document.getElementById("back").style.display = "block";
});

document.addEventListener("DOMContentLoaded", () => {
  const btnNo = document.getElementById("no");

  btnNo.addEventListener("mouseover", () => {
      const maxX = window.innerWidth - btnNo.clientWidth;
      const maxY = window.innerHeight - btnNo.clientHeight;

      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);

      btnNo.style.position = "absolute";
      btnNo.style.left = `${randomX}px`;
      btnNo.style.top = `${randomY}px`;
  });
});

// Borrar todas las cookies
document.cookie.split(";").forEach((cookie) => {
  let nombre = cookie.split("=")[0].trim();
  document.cookie = nombre + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
});

// Limpiar localStorage y sessionStorage
localStorage.clear();
sessionStorage.clear();

