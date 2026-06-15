<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

<h1 align="center">Pokédex API</h1>
<p align="center">
  Backend RESTful construido con <strong>NestJS</strong> y <strong>MongoDB</strong> para gestionar una base de datos de Pokémon. Soporta operaciones CRUD completas, seed de datos desde PokeAPI, validaciones robustas y manejo centralizado de errores.
</p>

## Stack Tecnologico

| Tecnologia | Uso |
|------------|-----|
| **NestJS** | Framework backend (Node.js/TypeScript) |
| **MongoDB** | Base de datos NoSQL |
| **Mongoose** | ODM para MongoDB en Node.js |
| **Docker** | Contenedorizacion de MongoDB |
| **class-validator** | Validacion de DTOs |
| **class-transformer** | Transformacion de objetos |

## Requisitos Previos

- **Node.js** >= 18
- **npm** o **yarn**
- **Docker Desktop** (para levantar MongoDB)
- **@nestjs/cli** instalado globalmente

```bash
npm install -g @nestjs/cli
```

## Instalacion y Ejecucion

### 1. Clonar el Repositorio

```bash
git clone <url-del-repo>
cd 03-pokedex
```

### 2. Instalar Dependencias

```bash
npm install
```

### 3. Levantar MongoDB con Docker

```bash
docker-compose up -d
```

Para detener la base de datos:

```bash
docker-compose down
```

### 4. Iniciar el Servidor en Desarrollo

```bash
npm run start:dev
```

La API estara disponible en: `http://localhost:3000/api`

---

## Endpoints de la API

Todos los endpoints responden bajo el prefijo `/api`.

### Pokemon

| Metodo | Endpoint | Descripcion |
|--------|----------|-------------|
| `POST` | `/pokemon` | Crear un nuevo Pokemon |
| `GET` | `/pokemon` | Obtener todos los Pokemones |
| `GET` | `/pokemon/:term` | Buscar un Pokemon por ID, nombre o numero |
| `PATCH` | `/pokemon/:term` | Actualizar un Pokemon por ID, nombre o numero |
| `DELETE` | `/pokemon/:id` | Eliminar un Pokemon por ID (Mongo ObjectId) |

### Seed (Carga Inicial de Datos)

| Metodo | Endpoint | Descripcion |
|--------|----------|-------------|
| `GET` | `/seed` | Poblar la base de datos con los 151 Pokemones originales desde la PokeAPI |

> **Nota:** El endpoint `POST /pokemon` devuelve HTTP 200 en lugar de 201.

---

## Estructura del Proyecto

```
src/
├── common/
│   ├── common.module.ts
│   └── pipes/
│       └── parse-mongo-id/
│           └── parse-mongo-id.pipe.ts    # Custom Pipe para validar Mongo ObjectIds
├── pokemon/
│   ├── dto/
│   │   ├── create-pokemon.dto.ts         # Validaciones al crear
│   │   └── update-pokemon.dto.ts         # Validaciones al actualizar
│   ├── entities/
│   │   └── pokemon.entity.ts             # Schema de Mongoose
│   ├── pokemon.controller.ts             # Controlador REST
│   ├── pokemon.module.ts
│   └── pokemon.service.ts                # Logica de negocio y acceso a BD
├── seed/
│   ├── seed.controller.ts
│   ├── seed.module.ts
│   └── seed.service.ts                   # Carga masiva desde PokeAPI
├── app.module.ts                         # Modulo raiz de la aplicacion
└── main.ts                               # Bootstrap de NestJS + configuracion global de pipes
```

---

## Caracteristicas Implementadas

- [x] **CRUD completo** de Pokemones (crear, listar, buscar, actualizar, eliminar)
- [x] **Busqueda flexible** por nombre, numero o ID de MongoDB
- [x] **Validacion de datos** con `class-validator` y `class-transformer`
- [x] **Manejo de errores** con excepciones personalizadas y status codes correctos
- [x] **Seed automatico** de los 151 Pokemones originales desde [PokeAPI](https://pokeapi.co/)
- [x] **Docker Compose** para MongoDB sin necesidad de instalacion local
- [x] **Custom Pipe** para validar ObjectIds de MongoDB en parametros de ruta
- [x] **Configuracion global de Pipes** en `main.ts` para toda la aplicacion

---

## Scripts Disponibles

| Comando | Descripcion |
|---------|-------------|
| `npm run start:dev` | Levanta el servidor en modo watch |
| `npm run build` | Compila para produccion |
| `npm run start:prod` | Ejecuta la version compilada |
| `npm run test` | Ejecuta tests unitarios |
| `npm run test:cov` | Tests con reporte de cobertura |
| `npm run lint` | Ejecuta ESLint con auto-fix |
| `npm run format` | Formatea el codigo con Prettier |

---

## Autor

- **Eduardo Fleitas**

