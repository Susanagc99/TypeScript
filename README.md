# Proyecto: Ejercicios de TypeScript + Next.js

Este repositorio contiene una colección de ejercicios prácticos realizados durante las clases de la **Ruta Avanzada de TypeScript + Next.js** en **Riwi**. Cada ejercicio aborda conceptos clave de TypeScript, React y Next.js, organizados en diferentes carpetas según la temática y la semana de trabajo.

---

## Estructura del Proyecto

```txt
src/
├── components/       # Componentes reutilizables como botones y tarjetas
├── database/         # Modelos de base de datos con Mongoose
├── helpers/          # Funciones auxiliares y utilidades
├── lib/              # Conexión a la base de datos
├── pages/            # Páginas de Next.js organizadas por semanas
├── services/         # Servicios para consumir APIs
├── styles/           # Archivos CSS para los estilos
```

---

## Ejercicios por Semana

### Semana 2: Fundamentos de TypeScript y React
- **`examplePOO`**: Ejemplo de Programación Orientada a Objetos (POO) con clases e interfaces.
- **`operModular`**: Uso de funciones auxiliares (`sumar`, `multiplicar`) importadas desde un archivo de utilidades.
- **`POOmyex`**: Ejercicio avanzado de POO con herencia y métodos personalizados.
- **`taller-impor-export`**: Taller práctico para trabajar con **interfaces**, **utils** y **componentes React**. Incluye:
  - Definición de tipos (`Product`, `Price`).
  - Utilidades de texto (`capitalize`, `truncate`, `formatPrice`).
  - Listado de productos renderizado con `.map`.

### Semana 3: Componentes Reutilizables y Genéricos
- **`testbutton`**: Creación de un botón reutilizable con estados (`loading`, `disabled`) y soporte para íconos.
- **`cards`**: Implementación de un componente `Card` que muestra información dinámica, incluyendo imágenes y descripciones.
- **`genericos`**: Uso de **genéricos** en funciones para manipular arrays (obtener el primer/último elemento, invertir el array, etc.).

---

## Funcionalidades Adicionales
- **Conexión a Base de Datos**: Uso de Mongoose para definir y gestionar modelos (`properties`).
- **API REST**: Rutas API creadas con Next.js para realizar operaciones CRUD sobre propiedades.
- **Notificaciones**: Uso de `react-toastify` para mostrar mensajes de éxito, error y advertencia en la interfaz.

---

## Tecnologías Utilizadas
- **TypeScript**: Tipado estático para mayor seguridad y escalabilidad.
- **Next.js**: Framework para aplicaciones React con soporte para SSR y rutas API.
- **React**: Biblioteca para construir interfaces de usuario.
- **Mongoose**: ODM para trabajar con MongoDB.
- **TailwindCSS**: Framework de estilos para diseño responsivo y moderno.
- **React Icons**: Biblioteca de íconos para enriquecer la interfaz.
- **React Toastify**: Notificaciones visuales para mejorar la experiencia del usuario.

---

## Cómo Ejecutar el Proyecto

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar las variables de entorno en un archivo `.env`:
   ```env
   MONGODB_URI=<tu_conexion_a_mongodb>
   ```

3. Ejecutar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Retos Opcionales
- Crear un filtro de productos activos en el taller de la semana 2.
- Implementar un componente `Badge` para mostrar estados en las tarjetas.
- Agregar pruebas unitarias para las funciones genéricas y utilidades.

---

## Créditos
Este proyecto fue desarrollado como parte de las clases de **Riwi**, bajo la guía de instructores expertos en TypeScript y Next.js.
