# 🚢 Proyecto Frontend - QuickShipping

![Estado del Proyecto](https://img.shields.io/badge/Estado-En%20Desarrollo-yellow)
![Licencia](https://img.shields.io/badge/Licencia-MIT-blue)
![Tecnología Principal](https://img.shields.io/badge/Framework-[React/Vue/Angular]-blueviolet)

## 📝 Índice

1.  [Descripción del Proyecto](#1-descripción-del-proyecto)
2.  [Características Principales](#2-características-principales)
3.  [Tecnologías Utilizadas](#3-tecnologías-utilizadas)
4.  [Prerrequisitos](#4-prerrequisitos)
5.  [Instalación y Configuración](#5-instalación-y-configuración)
6.  [Uso del Proyecto](#6-uso-del-proyecto)
7.  [Estructura del Proyecto](#7-estructura-del-proyecto)
8.  [Despliegue (Deployment)](#8-despliegue-deployment)
9.  [Contribución](#9-contribución)
10. [Licencia](#10-licencia)

---

## 1. Descripción del Proyecto

El `Proyecto-Frontend-QuickShipping` es la interfaz de usuario (UI) principal para el sistema de gestión y cotización de envíos **QuickShipping**. Su objetivo es proporcionar una experiencia de usuario fluida e intuitiva para:

* **Cotizar servicios de envío** basado en parámetros (peso, dimensiones, destino).
* **Visualizar las tasas de cambio** oficiales y aplicarlas a las cotizaciones.
* [**Menciona otra funcionalidad clave, ej:** Gestionar el seguimiento de paquetes].

Esta aplicación se conecta directamente al [Proyecto-Backend-QuickShipping](https://github.com/AntonioDV-web/Proyecto-Back-QuickShipping) para manejar la lógica de negocio, la autenticación y la persistencia de datos.

## 2. Características Principales

* **Diseño Responsivo:** Interfaz optimizada para dispositivos móviles y de escritorio.
* **Integración con API Externa:** Conexión con el Backend para obtener tasas de cambio actualizadas.
* **Módulos de Usuario:** Autenticación (registro/login) y gestión de perfiles.
* **Formulario de Cotización Dinámico:** Calculadora de costos en tiempo real.
* **Componentes Reutilizables:** Construido bajo el paradigma de componentes para facilitar el mantenimiento.

## 3. Tecnologías Utilizadas

Este proyecto fue desarrollado utilizando el siguiente stack tecnológico:

| Categoría | Tecnología | Versión | Propósito |
| :--- | :--- | :--- | :--- |
| **Framework Principal** | [React/Vue/Angular] | [vX.X] | Construcción de la interfaz de usuario. |
| **Lenguaje** | JavaScript (o TypeScript) | ES6+ | Lógica del lado del cliente. |
| **Manejo de Estado** | [Redux/Zustand/Vuex] | [vX.X] | Gestión de estados complejos de la aplicación. |
| **Estilos** | [Tailwind CSS/Bootstrap/CSS Modules] | [vX.X] | Diseño y estilos rápidos y consistentes. |
| **Gestor de Paquetes** | npm (Node Package Manager) | [vX.X] | Instalación de dependencias. |

## 4. Prerrequisitos

Antes de comenzar, asegúrate de tener instalado el siguiente software en tu sistema:

* **Git:** Para clonar el repositorio.
* **Node.js:** Versión 16.x o superior.
* **npm:** (Viene con Node.js)

Verifica tus versiones ejecutando:

```
node -v
npm -v

````
5. Instalación y Configuración
Sigue estos pasos para obtener una copia funcional del proyecto en tu entorno local.

5.1. Clonar el Repositorio
Abre tu terminal y ejecuta el siguiente comando:

````

git clone [https://github.com/AntonioDV-web/Proyecto-Frontend-QuickShipping.git](https://github.com/AntonioDV-web/Proyecto-Frontend-QuickShipping.git)
cd Proyecto-Frontend-QuickShipping
````
5.2. Instalar Dependencias
Una vez dentro de la carpeta del proyecto, instala todas las librerías necesarias:

````
npm install

````
# o
````
yarn install
````
5.3. Configuración de Variables de Entorno
El proyecto requiere variables de entorno para conectarse al backend.

Crea un archivo llamado .env (o .env.local) en la raíz del proyecto.

Agrega la URL de tu API del Backend (asegúrate de que el backend esté corriendo):

# Ejemplo de una variable para la URL base de tu API
````
VITE_REACT_APP_API_URL=http://localhost:3000/api/v1
````
# O el formato que use tu framework (e.g., REACT_APP_API_URL para Create React App)
Asegúrate de cambiar el prefijo VITE_REACT_APP_... si estás usando otro bundler como Webpack, Next.js, etc.

6. Uso del Proyecto
Una vez que las dependencias estén instaladas y las variables de entorno configuradas, puedes iniciar la aplicación.

6.1. Ejecutar en Modo Desarrollo
Este comando inicia la aplicación en un servidor local (típicamente en http://localhost:3000 o http://localhost:5173) y habilita la recarga en caliente (Hot Reload):
````
npm run dev
````
# o si usa Create React App/Next.js/Vue CLI:
````
npm start
````
6.2. Abrir en el Navegador
La aplicación estará disponible en la dirección indicada por la consola.

7. Estructura del Proyecto
La arquitectura sigue el patrón de componentes, separando la lógica y la presentación.
````
.
├── node_modules/         # Dependencias
├── public/               # Archivos estáticos (favicon, index.html base)
├── src/
│   ├── assets/           # Imágenes, íconos, fuentes
│   ├── components/       # Componentes reutilizables y atómicos
│   ├── context/          # (Opcional) Contextos/Stores de manejo de estado global
│   ├── pages/            # Vistas principales de la aplicación (e.g., Home, Cotización, Login)
│   ├── services/         # Lógica para interactuar con el Backend (peticiones HTTP)
│   ├── styles/           # Archivos de estilos globales
│   └── App.js            # Componente raíz
├── .env                  # Variables de entorno
├── package.json          # Metadatos y scripts
└── README.md
````
8. Despliegue (Deployment)
Para preparar la aplicación para producción, utiliza el siguiente comando, que creará una carpeta optimizada (típicamente dist o build):

````
npm run build
````
La carpeta generada (/build o /dist) puede ser servida por cualquier servidor web estático (como Netlify, Vercel, Firebase Hosting o Nginx).
