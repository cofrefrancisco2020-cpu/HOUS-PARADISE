# HOUS PARADISE — versión 1

Web estática de Hous Paradise, casa de descanso en San Pedro de Atacama. Lista para subir a GitHub y desplegar en Vercel sin instalación ni proceso de compilación.

## Abrir y publicar

- Para una vista rápida, abre `index.html` en el navegador.
- Para probarla con servidor local, ejecuta `npx serve .` desde esta carpeta o utiliza cualquier servidor HTTP estático.
- En GitHub, sube **el contenido de esta carpeta** como raíz del repositorio. En Vercel, importa el repositorio, elige **Other** como framework y deja vacío el comando de build; el directorio de salida es `.` (raíz del proyecto).
- No se necesitan variables de entorno ni dependencias.

## Archivos

- `index.html`: estructura, contenido y metadatos.
- `styles.css`: identidad visual, responsive y animaciones.
- `script.js`: formulario hacia WhatsApp, menú móvil, galería y efectos de aparición.
- `assets/`: fotografías reales optimizadas a WebP y logotipo SVG original inspirado en la pieza de la entrada.
- `brief-marca.md`: fuentes, decisiones y datos pendientes.

## Contacto y reservas

Todas las consultas van al WhatsApp de Hugo: **+56 9 6178 1294**. El formulario construye un mensaje con fechas y cantidad de huéspedes. No confirma una reserva ni procesa pagos. Las tarifas y la disponibilidad se confirman directamente con Hugo.

## Antes de conectar un dominio definitivo

1. Confirmar con Hugo la capacidad máxima, reglas de estadía, horarios de entrada/salida, servicios incluidos y tarifas si se quieren publicar.
2. Una vez asignado el dominio final, agregar URL absoluta en `canonical`, `og:url` y `og:image`. Si se crea sitemap, usar solo esa URL definitiva.
3. Confirmar que la dirección y el marcador del mapa representan el acceso correcto a la propiedad.

No se alteraron con IA las fotos de la casa. Se redimensionaron y comprimieron para la web. El logo es una interpretación vectorial del retrato artesanal fotografiado en la entrada, no un calco ni una imagen generada.
