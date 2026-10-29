const formulario = document.getElementById("formulario-notas");
const mensaje = document.getElementById("mensaje");
const listaNotas = document.getElementById("lista-notas");

function mostrarMensaje(texto, tipo) {
  mensaje.textContent = texto;
  mensaje.className = "mensaje " + tipo;
}

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();
  formulario.classList.add("validado");

  const titulo = document.getElementById("titulo").value.trim();
  const contenido = document.getElementById("contenido").value.trim();
  const categoria = document.getElementById("categoria").value;

  if (!formulario.checkValidity() || !titulo || !contenido) {
    mostrarMensaje("No puedes agregar una nota vacía. Completa todos los campos.", "error");
    formulario.querySelector("input:invalid, select:invalid")?.focus();
    return;
  }

  const li = document.createElement("li");
  li.className = "item-nota";
  li.innerHTML = `
    <div>
      <strong style="color: var(--color-primario);">[${categoria}] ${titulo}</strong>
      <p style="margin: 4px 0 0; color: var(--color-suave);">${contenido}</p>
    </div>
    <button class="boton-eliminar">Eliminar</button>
  `;

  li.querySelector(".boton-eliminar").addEventListener("click", function () {
    if (confirm("¿Estás seguro de que deseas eliminar esta nota?")) {
      li.remove();
      mostrarMensaje("Nota eliminada correctamente.", "info");
    }
  });

  listaNotas.appendChild(li);
  formulario.reset();
  formulario.classList.remove("validado");
  mostrarMensaje("¡Nota agregada con éxito!", "exito");
});

formulario.addEventListener("reset", function () {
  formulario.classList.remove("validado");
  mostrarMensaje("Formulario limpio.", "info");
});