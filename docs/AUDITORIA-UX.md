# Auditoría y Rediseño de UX/UI - Aplicación de Notas

## 1. Tabla de Auditoría (5 Heurísticas de Nielsen)

| Heurística | Problema de la pantalla original | Solución aplicada |
| :--- | :--- | :--- |
| **Visibilidad del estado** | Al agregar o eliminar una nota no había feedback visual para saber si la acción tuvo éxito. | Se implementó un mensaje dinámico (`role="status"`) que confirma acciones como "Nota agregada" o "Nota eliminada". |
| **Control y libertad** | Al hacer clic en "Eliminar", la nota se borrabas de inmediato sin opción a cancelar. | Se agregó una confirmación previa (`confirm()`) y un botón con temporizador para deshacer/cancelar la acción. |
| **Prevención de errores** | El usuario podía guardar notas vacías o solo con espacios en blanco. | Se configuraron los atributos `required` en HTML y la validación con `checkValidity()` en JS para deshabilitar el guardado si el campo está vacío. |
| **Reconocer, no recordar** | Los campos solo usaban `placeholder` que desaparecía al escribir. | Se agregaron etiquetas `<label>` permanentes en cada campo de texto para mantener la referencia visible siempre. |
| **Accesibilidad** | No había contraste adecuado entre texto y fondo, y se había quitado el foco de navegación (`outline: none`). | Se aplicó contraste ratio superior a 4.5:1 (WCAG AA), etiquetas `<label>`, atributos `alt` y foco visible naranja con `:focus-visible`. |

---

## 2. Justificación de Leyes de UX

* **Ley de Fitts:** El botón principal "Guardar Nota" ocupa todo el ancho disponible (`width: 100%`) con una altura de 44px, facilitando el clic o toque rápido, mientras que las acciones secundarias están claramente separadas por un margen de 24px para evitar toques accidentales.
* **Ley de Hick:** Se redujo la cantidad de opciones en pantalla organizando las notas por categorías en un desplegable de selección corta, reduciendo el tiempo de decisión del usuario al filtrar o crear una nota.
* **Ley de Miller:** La interfaz de creación de notas se dividió en dos secciones cortas (1. Contenido de la nota, 2. Categoría y etiquetas), respetando el límite de procesamiento de memoria a corto plazo del usuario.

---

## 3. Puntuación de Accesibilidad (Lighthouse)

* **Puntaje Antes:** 62 / 100 (Falta de contraste, sin labels, sin foco visible).
* **Puntaje Después:** 100 / 100 (Cumple con WCAG 2.2 AA).