# Validador de Usuarios - Proyecto Full Stack

## Requisitos Previos

- [Node.js](https://nodejs.org/) (v14 o superior)
- [npm](https://www.npmjs.com/) (viene con Node.js)

## Instrucciones de Instalación

### Backend (Express.js)

1. Navega al directorio del backend:

   ```bash
   cd backend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Si es necesario, instala las dependencias específicas:

   ```bash
   npm install express cors
   ```

### Frontend (React)

1. Navega al directorio del frontend:

   ```bash
   cd frontend
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

## Ejecutar el Proyecto

Para que la aplicación funcione correctamente, necesitas tener tanto el backend
como el frontend ejecutándose simultáneamente.

### Iniciar el Backend

1. Navega al directorio del backend:

   ```bash
   cd backend
   ```

2. Inicia el servidor:

   ```bash
   npm run dev
   ```

   El servidor se ejecutará en <http://localhost:3000>.

### Iniciar el Frontend

1. Abre una nueva terminal y navega al directorio del frontend:

   ```bash
   cd frontend
   ```

2. Inicia la aplicación React:

   ```bash
   npm run dev
   ```

   La aplicación se ejecutará en <http://localhost:5173> (o el puerto que Vite asigne).

3. Abre tu navegador y visita <http://localhost:5173> para ver la aplicación.

## Uso de la Aplicación

1. Ingresa un nombre de usuario en el campo de texto.
2. Haz clic en el botón "Verificar Usuario".
3. La aplicación mostrará si el usuario es válido o no.

**Nota**: Los usuarios válidos predefinidos son: "facu" y "facundo".
