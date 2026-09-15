markdown
POKEDEX API

API REST para gestionar una Pokédex, desarrollada con NestJS, MongoDB y Docker. Permite crear, consultar, actualizar y eliminar registros de Pokémon con validación de datos y arquitectura modular.

Stack Tecnologico

- NestJS - Framework Node.js progresivo
- TypeScript - Tipado estatico
- MongoDB + Mongoose - Base de datos NoSQL
- Docker & Docker Compose - Containerizacion
- class-validator / class-transformer - Validacion y transformacion de DTOs
- Jest - Testing unitario y e2e

Requisitos Previos

- Node.js >= 20
- Docker Desktop
- npm o equivalente

Instalacion y Ejecucion

1. Clonar el repositorio
   bash
   git clone https://github.com/eduardofleitass/POKEDEX.git
   cd POKEDEX


2. Instalar dependencias
   bash
   npm install


3. Instalar Nest CLI (global)
   bash
   npm i -g @nestjs/cli


4. Levantar MongoDB con Docker
   bash
   docker-compose up -d


5. Iniciar en modo desarrollo
   bash
   npm run start:dev


6. Detener la base de datos
   bash
   docker-compose down


Scripts Disponibles

| Comando           | Descripcion                    |
|-------------------|--------------------------------|
| npm run build     | Compilar para produccion       |
| npm run start:dev | Modo desarrollo con hot-reload |
| npm run test      | Tests unitarios                |
| npm run test:e2e  | Tests end-to-end               |
| npm run lint      | Ejecutar ESLint y corregir     |
| npm run format    | Formatear con Prettier         |

Estructura del Proyecto


src/
  pokemon/          Modulo de Pokemons (controller, service, schema)
  app.module.ts     Modulo raiz
  main.ts           Punto de entrada
test/
  e2e tests
public/             Archivos estaticos servidos por NestJS


Contacto

Creado por eduardofleitass
