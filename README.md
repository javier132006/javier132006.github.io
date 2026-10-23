# Portfolio de Javier Mantoan

Web personal con mi portfolio y currículum digital. Estoy buscando prácticas o mi primer puesto junior como desarrollador (Valencia o en remoto).

**Web:** https://javier132006.github.io

## Qué incluye

- Presentación, formación y trayectoria.
- Proyecto destacado: servicio de reporting de un simulador de cadena de suministro con microservicios (prácticas en GFT).
- Tecnologías organizadas por categoría y nivel de uso.
- Versión en español e inglés, con modo claro y oscuro.

## Tecnologías

HTML, CSS y JavaScript, sin frameworks ni dependencias. No hay backend ni base de datos. La única petición externa es la carga de las fuentes (Fraunces, Inter y JetBrains Mono) desde Google Fonts.

## Estructura

```
index.html   contenido de la web (en español, con la traducción al inglés en atributos data-en)
styles.css   estilos, colores y modo oscuro
script.js    cambio de idioma y de tema
```

## Ejecutarla en local

No necesita instalación. Abre `index.html` en el navegador, o levanta un servidor sencillo desde la carpeta:

```
python -m http.server 8000
```

y entra en http://localhost:8000.

## Cómo editar el contenido

- **Textos:** el español está dentro de cada etiqueta y el inglés en su atributo `data-en`. Al cambiar un texto hay que cambiar los dos.
- **Colores:** variables al inicio de `styles.css` (`:root`). El modo oscuro tiene su propio bloque.
- **Tecnologías y trayectoria:** secciones `#tecnologias` y `#trayectoria` de `index.html`.

## Despliegue

Se publica con GitHub Pages desde la rama `main`: en el repositorio, *Settings → Pages → Deploy from a branch → `main` / `(root)`*. Cada `git push` actualiza la web en uno o dos minutos.

## Pendiente

- Añadir el PDF del currículum y activar el botón de descarga.
- Imagen para la vista previa al compartir el enlace y favicon.
- Foto personal (opcional).
