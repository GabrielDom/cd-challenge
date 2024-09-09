# Nombre del Proyecto

Chaindots challenge: https://cd-challenge.netlify.app/

## Instalación

1. Clona el repositorio:

   ```sh
   git clone https://github.com/GabrielDom/cd-challenge.git
   cd tu-repositorio

   ```

2. Instalar dependencias:

```sh
npm install

```

3. Ejecutar:

```sh
npm run dev

```

## Configuración de la API

Este proyecto utiliza RapidAPI para obtener datos. Necesitarás una clave API de RapidAPI.

Regístrate en RapidAPI si aún no tienes una cuenta.

Una vez logueado en RapidAPI, ingresar a Apps para la configuración de la aplicación.

Seleccionar la opcion Add New App y completar el formulario.

Ve a la API WeatherAPI.com y suscríbete al plan free.

Copia tu clave API.

Crea un archivo .env en la raíz del proyecto y agrega tu clave API:

VITE_API_KEY=tu_clave_api
VITE_URL_BASE="https://weatherapi-com.p.rapidapi.com"
VITE_API_HOST="weatherapi-com.p.rapidapi.com"

```

```
