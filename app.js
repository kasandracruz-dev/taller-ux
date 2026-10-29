document.getElementById("enviar").addEventListener("click", function () {
  const titulo = document.getElementById("titulo").value;
  const contenido = document.getElementById("contenido").value;
  const li = document.createElement("li");
  li.textContent = titulo + ": " + contenido;
  document.getElementById("lista").appendChild(li);
});

document.getElementById("borrar").addEventListener("click", function () {
  document.getElementById("lista").innerHTML = "";
});