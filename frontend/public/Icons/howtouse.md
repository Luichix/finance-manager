# Guía de uso del sprite

Cada etiqueta `<symbol></symbol>` tiene un `ID` único que debe ser descriptivo y no incluir más de un hyphen (guión corto).

Este sprite.svg no va a ser útilizado en CSS ni SASS, solo lo llamaremos desde la etiqueta `<svg>` de HTML para facilitar las cosas, por ende si quisiéramos hacer algún degradado en el fill en un icono o algo por el estilo que requiera CSS, vamos a tener que descargar el SVG por separado.

## Uso

```html
<svg>
  <use href="public/Icons/sprite.svg#IDDELSVG"></use>
</svg>
```

## SVGS disponibles

Para ver los SVGS disponibles abre el demo.html que se ubica en esta carpeta.

## Agregar SVGS

Usaremos la herramienta [svgspirit](https://svgsprit.es) para generar automáticamente las etiquetas `<symbol>` que contendrán nuestros svg.
