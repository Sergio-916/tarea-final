# Tarea Final Readme

## Descripción
Este proyecto es una aplicación web full-stack construida con tecnologías FrontEnd y BackEnd. Las principales características del sitio incluyen autenticación de usuarios, navegación de productos, funcionalidad de carrito de compras y la capacidad de guardar y revisar productos favoritos.

## Tecnologías y Bibliotecas

### FrontEnd
- React
- React Router
- Zustand
- Tailwind CSS
### BackEnd
- Express
- JWT (JSON Web Tokens)
- Mongoose
## Características Principales del Sitio
- **Autenticación**: Los usuarios pueden iniciar sesión utilizando JWT Tokens. Los datos de usuario se almacenan de forma segura en MongoDB.
- **Carrito de Compras**: Cuando se cambia la cantidad de un producto en el carrito, se actualiza dinámicamente para reflejar la disponibilidad actual en el stock. Cuando se realiza un pedido, la cantidad en stock de los productos se actualiza en la base de datos, asegurando una gestión precisa del inventario.
- **Gestión de Pedidos**: Los detalles de los pedidos se guardan en la base de datos, incluyendo información sobre los productos, cantidades y detalles del usuario. Esto permite un seguimiento y gestión sencillos de los pedidos.
- **Favoritos**: Después de iniciar sesión, los usuarios pueden guardar productos en su lista de favoritos, que pueden revisar en una página de favoritos personal. La lista de favoritos se guarda en MongoDB y se puede acceder desde cualquier dispositivo al iniciar sesión.
- **Diseño Responsivo**: El sitio está completamente adaptado para dispositivos móviles.
- 
## Instalación

### FrontEnd
1. Navega hasta el directorio client.
2. Instala las dependencias:
 
npm install

3. Inicia el servidor de desarrollo:

npm run dev

El cliente estará disponible en: http://localhost:5173/

### BackEnd
1. Navega hasta el directorio server.
2. Instala las dependencias:

npm install

3. Crea un archivo .env en el directorio server con el siguiente contenido (ejemple):

MONGO_URL=your_mongo_connection_string
TOKEN_SECRET=your_jwt_secret
PORT=3050

4. Inicia el servidor

node index.js
El servidor estará disponible en: http://localhost:3050/

## Ejecución del Proyecto
Para ejecutar el proyecto, debes iniciar tanto los servidores front-end como back-end. Abre dos ventanas o pestañas de terminal y ejecuta los siguientes comandos:

# Terminal 1: Inicia el FrontEnd

cd client
npm run dev

# Terminal 2: Inicia el BackEnd

cd server
node index.js

## Configuración
Asegúrate de que MongoDB esté en funcionamiento y actualiza la cadena de conexión en tu archivo .env.
Agrega tu secreto JWT al archivo .env.

## Scripts
npm run dev: Inicia el servidor de desarrollo para el cliente.
node index.js: Inicia el servidor para el backend.
## Licencia
Este proyecto está bajo una Licencia Creative Commons Atribución 4.0 Internacional.

Eres libre de:

Compartir: copiar y redistribuir el material en cualquier medio o formato.
Adaptar: remezclar, transformar y construir sobre el material para cualquier propósito, incluso comercialmente.
Bajo los siguientes términos:

Atribución: Debes dar crédito de manera apropiada, brindar un enlace a la licencia e indicar si se han realizado cambios. Puedes hacerlo de cualquier manera razonable, pero no de ninguna manera que sugiera que el licenciante respalda tu uso.

## Autores
Sergey Shpak alias Sergio-916