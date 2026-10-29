# Auditoría y Rediseño de UX/UI - Aplicación de Notas

## 1. Tabla de Heurísticas de Nielsen (Problema vs. Solución)

| Heurística | Problema de la pantalla original | Solución aplicada |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o borrar una nota no existía ninguna respuesta visual para el usuario. | Se creó un contenedor dinámico con `role="status"` que muestra mensajes como "¡Nota agregada con éxito!" o "Nota eliminada". |
| **Control y libertad** | Al hacer clic en "Eliminar", la nota se borraba de inmediato sin posibilidad de cancelar. | Se agregó una ventana de confirmación previa (`confirm()`) que permite cancelar la acción destructiva antes de ejecutarla. |
| **Prevención de errores** | Se permitía guardar notas vacías o compuestas únicamente por espacios en blanco. | Se implementó el atributo `required` en HTML y la validación con `.checkValidity()` y `.trim()` en JS para denegar el envío vacío. |
| **Reconocer, no recordar** | Los campos solo usaban `placeholder` como indicativo, el cual desaparecía al escribir. | Se vincularon etiquetas `<label>` permanentes arriba de cada campo para mantener la referencia siempre visible. |
| **Accesibilidad** | La tipografía era diminuta, los botones medían menos de 30px, no existía foco visible (`outline: none`) y el contraste era deficiente. | Se aplicó un contraste > 4.5:1 (WCAG AA), alto mínimo de 44px en botones, etiquetas `<label>`, texto `alt` y foco visual naranja con `:focus-visible`. |

---

## 2. Justificación de Leyes de UX

* **Ley de Fitts:** El botón principal "Guardar Nota" abarca todo el ancho (`width: 100%`) con una altura de 44px para facilitar un clic/toque rápido. Además, el botón secundario y el botón de borrar están separados por más de 16px para evitar clics accidentales.
* **Ley de Hick:** La selección de categorías de notas se agrupó en un menú desplegable `<select>` usando `<optgroup>`, reduciendo el tiempo de decisión al clasificar las opciones por bloques (Estudios vs. Personal).
* **Ley de Miller:** El formulario se estructuró dividiendo los campos en dos bloques numerados (`1. Contenido de la nota` y `2. Categoría`), evitando saturar la memoria de trabajo a corto plazo del usuario.

---

## 3. Puntuación de Accesibilidad (Lighthouse)

* **Antes del rediseño:** 62 / 100 (Falta de contraste, ausencia de etiquetas `label` y remoción del foco visual).
* **Después del rediseño:** 100 / 100 (Cumple con las pautas de accesibilidad WCAG 2.2 AA).