function marcarVisto(pagina) {
  localStorage.setItem(pagina, "true");
}

function verificarDesbloqueo() {
  const historiaVisto = localStorage.getItem("historia") === "true";
  const galeriaVisto = localStorage.getItem("galeria") === "true";
  const cancionesVisto = localStorage.getItem("canciones") === "true";
  const aVecesVisto = localStorage.getItem("a-veces") === "true";

  if (historiaVisto && galeriaVisto && cancionesVisto) {
      document.getElementById("a-veces").style.display = "flex";
      document.getElementById("historia").style.display = "none";
      document.getElementById("galeria").style.display = "none";
      document.getElementById("canciones").style.display = "none";
  }

  if(aVecesVisto){
    document.getElementById("finalVideo").style.display = "flex";
    document.getElementById("back").style.display = "block";

  }
}

document.addEventListener("DOMContentLoaded", verificarDesbloqueo);