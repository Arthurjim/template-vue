# Gastronomy Misc Frontend 🚴🏻‍♂️

![Vue](https://img.shields.io/badge/Vue.js-339933?style=flat-square&logo=vuedotjs&logoColor=4FC08D)
![TypeScript](https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=amazon-aws&logoColor=white)

# Contents

- [Instalación](#installation)
- [Set-Up Inicial](#set-up)
- [Arquitectura del proyecto](#architecture)
- [Levantar el proyecto](#run)
- [Convenciones de Nomenclatura](#conventions)

# <a name="installation"></a>Instalación ⚙️

## Pnpm 📦

Pnpm es el gestor de paquetes utilizado. Deberás instalarlo de forma global.

```bash
npm install --global pnpm
```

Comprobar la instalación de pnpm

```
pnpm --version
```

# <a name="set-up"></a>Set-up Inicial 🆙

## Code Artifacts Export Token

Code artifact en windows 🪟

```bash
$Env:CODEARTIFACT_AUTH_TOKEN=aws codeartifact get-authorization-token --domain dev-it-palaceresorts --domain-owner 427784172992 --query authorizationToken --output text
```

Code artifact en Mac 🍎

```bash
export CODEARTIFACT_AUTH_TOKEN=`aws codeartifact get-authorization-token --domain dev-it-palaceresorts --domain-owner 427784172992 --query authorizationToken --output text`
```

## ![Node Modules](https://img.shields.io/badge/-Node_Modules-43853D?style=flat-square&logo=node.js&logoColor=white) Instalar dependencias del proyecto

En la raíz del proyecto ejecutar. Esto descargará las dependencias del proyecto en la carpeta `node_modules`

```bash
pnpm install
```

## Husky 🐶

Husky es una herramienta que facilita la configuración y ejecución de ganchos (hooks) de Git en proyectos de desarrollo. Estos ganchos permiten automatizar tareas como pruebas, linting y otros controles antes de realizar acciones como confirmar o empujar cambios. Su objetivo es garantizar la calidad del código y la consistencia en el flujo de trabajo del equipo.

Para configurar husky hay que ejecutar el script desde la raiz

```bash
pnpm run prepare
```

# <a name="architecture"></a>Arquitectura del Proyecto 🧠

```
project-root
├── src
│   └── assets
│       ├── icons
│       ├── images
│       ├── styles
│           ├── elements
│           ├── fonts
│           ├── generic
│           └── settings
│       └── themes
│   ├── components
│       ├── common
│       ├── module
│       └── ui
│           ├── atoms
│           ├── molecules
│           └── objects
│   ├── composables
│       ├── module
│       └── shared
│   ├── dependencies
│   ├── layouts
│   ├── locales
│       ├── sections
│       └── shared
│   ├── modules
│       ├── context
│          └── module
│              ├── domain
│              │   ├── model
│              │   └── repository
│              ├── application
│              └── infrastructure
│       └── shared
│           ├── domain
│           └── infrastructure
│   ├── plugins
│   ├── router
│   ├── stores
│   ├── utils
│       └── constant
│   └── views
│       └── module
├── tests
│   └── modules
│        └── module
│             ├── domain
│             ├── application
│             └── infrastructure
│        └── shared
│             ├── domain
└── config
```

La estructura de carpetas propuesta sigue los principios del Diseño Guiado por el Dominio (DDD) y SOLID. Estos principios ayudan a crear un código más limpio, modular y fácil de mantener.

- `assets` 🎨: Esta carpeta contiene todos los recursos estáticos utilizados en el proyecto, como imágenes, iconos y estilos. La estructura de la carpeta `assets` es la siguiente:

  - `icons`: Contiene todos los iconos utilizados en el proyecto.
  - `images`: Contiene todas las imágenes utilizadas en el proyecto.
  - `styles`: Contiene todos los estilos globales y de componentes del proyecto. La estructura de la carpeta `styles` sigue los principios del Diseño Guiado por el Dominio (DDD), separando los estilos en las siguientes subcarpetas:
    - `elements`: Contiene los estilos para los elementos HTML básicos, como botones, enlaces, etc.
    - `fonts`: Contiene las definiciones de fuentes utilizadas en el proyecto.
    - `generic`: Contiene estilos genéricos y de reinicio que se aplican en todo el proyecto.
    - `settings`: Contiene las variables de configuración de los estilos, como colores, tamaños de fuente, etc.
  - `themes`: Contiene los temas de estilo (vuetify) utilizados en el proyecto.

- `components` 🧩: Esta carpeta contiene todos los componentes Vue utilizados en el proyecto. La estructura de la carpeta `components` sigue los principios del Diseño Guiado por el Dominio (DDD), separando los componentes en las siguientes subcarpetas:

  - `common`: Contiene los componentes que se utilizan en varias partes del proyecto.
  - `module`: Contiene los componentes que son específicos de un módulo particular del proyecto.
  - `ui`: Contiene los componentes de la interfaz de usuario, que se dividen en átomos, moléculas y objetos siguiendo la metodología de diseño atómico.
    - `atoms`: Contiene los componentes de interfaz de usuario más pequeños e indivisibles, como botones, enlaces, etc.
    - `molecules`: Contiene grupos de componentes atómicos que funcionan juntos como una unidad, como formularios, encabezados, etc.
    - `objects`: Contiene grupos de moléculas que forman una parte de la interfaz de usuario, como listas, tarjetas, etc.

- `Domain` 🌐: Esta carpeta contiene la lógica de negocio y las entidades del dominio. Aquí es donde se implementan los Value Objects y las entidades de DDD.

- `Application` 🚀: Esta carpeta contiene los servicios de aplicación, que orquestan el uso de los objetos de dominio y las operaciones de infraestructura.

- `Infrastructure` 🏗️: Esta carpeta contiene todo el código que interactúa con sistemas externos, como bases de datos, servicios web, etc.

- `tests` 🧪: Esta carpeta contiene todas las pruebas unitarias y de integración para el código de la aplicación.

## Principios SOLID 🌟

Los principios SOLID son un conjunto de cinco principios de diseño orientado a objetos que ayudan a crear sistemas de software más comprensibles, flexibles y mantenibles. Aquí está una breve descripción de cada uno:

- **S**ingle Responsibility Principle (SRP) 🎯: Una clase debe tener solo una razón para cambiar. Esto significa que una clase debe tener solo una tarea o responsabilidad.

- **O**pen/Closed Principle (OCP) 🔒: Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para su extensión, pero cerradas para su modificación.

- **L**iskov Substitution Principle (LSP) 🔄: Las subclases deben ser sustituibles por sus clases base. Es decir, un objeto de una clase derivada debe poder reemplazar un objeto de la clase base sin afectar la corrección del programa.

- **I**nterface Segregation Principle (ISP) 📦: Los clientes no deben ser forzados a depender de interfaces que no utilizan. Esto significa que una clase no debe implementar métodos que no necesita.

- **D**ependency Inversion Principle (DIP) 🔄: Depender de abstracciones, no de concreciones. Es decir, las clases de alto nivel no deben depender de las clases de bajo nivel. Ambas deben depender de abstracciones.

## Diseño Guiado por el Dominio (DDD) 🏰

El Diseño Guiado por el Dominio (DDD) es un enfoque para el desarrollo de software que se centra en la creación de un modelo de dominio, una abstracción del problema que el software está diseñado para resolver.

Aquí están algunos de los conceptos clave de DDD:

- **Entidades** 🤖: Son objetos que tienen una identidad que no cambia a lo largo del tiempo (por ejemplo, un usuario o una cuenta bancaria).

- **Value Objects** 🧱: Son objetos que no tienen identidad y son inmutables. Se definen solo por sus atributos (por ejemplo, una dirección de correo electrónico o una fecha).

- **Agregados** 🌐: Son grupos de entidades y objetos de valor que se tratan como una unidad para la persistencia de datos.

- **Servicios de Dominio** ⚙️: Son operaciones que no pertenecen a ninguna entidad o valor objeto. Por ejemplo, una operación que requiere interactuar con múltiples agregados.

- **Eventos de Dominio** 🎉: Son eventos significativos que ocurren en el dominio. Por ejemplo, cuando se crea una nueva cuenta bancaria, podría emitirse un evento de dominio "CuentaCreada".

- **Repositorios** 🗃️: Son interfaces que permiten a las entidades y los agregados persistir y recuperar de la persistencia.

Implementar DDD puede ser complejo, pero puede resultar en un código más limpio y mantenible que refleja mejor el problema de negocio que el software está tratando de resolver.

# <a name="run"></a>Levantar el proyecto ✅

Ejecutar el siguiente comando.

```bash
pnpm dev
```

## Commits 💾

- Los commit deberán seguir la siguiente estructura:

```
[type]: [commit message]
```

- Los `type` permitios son:
  - `feat`
  - `fix`
  - `merge-dev`
  - `merge-qa`
  - `merge-prod`
  - `refactor`
  - `revert`
  - `chore`
  - `docs`
- El `commit message` deberá estar en su totalidad en **_minusculas_** y con una **_longitud máxima de 50 caracteres_**.
- Ejemplo

```
feat: store file in s3 usecase created
```

## Comentarios de Git Convencionales

### feat

```bash
⚡️feat: <mensaje>

Utilízalo para expresar que un nuevo feature para el usuario ha sido creado,
nunca para un cambio en el tooling, como en un script.  Ej:

feat: create login, authentication and authorization
```

### fix

```bash
🔨 fix: <mensaje>

Sirve para indicar que se hizo una reparación para el usuario.
No se usa expresar algún arreglo hecho al tooling. Ej:

fix: hover state of the CTA button in the product page
```

### docs

```bash
📝 docs: <mensaje>

Explica un cambio hecho a la documentación del proyecto. Ej:

docs: include FAQ section in the README
```

### style

```bash
✏️ style: <mensaje>

Se usa para explicar que se ha hecho un cambio de estilo en el código directamente.
No se utiliza para modificación en producción. Ej:

style: add a missing semi-colon
```

### refactor

```bash
👷‍♂️ refactor: <mensaje>

Sirve para explicar que se hizo una refactorización al código. Ej

refactor: rename css variables to match the convention
```

### test

```bash
🧪 test: <mensaje>

Indica que se ha hecho un cambio en los tests, pero no una modificación en código
de producción. Ej

test: fix E2E tests for the dashboard page
```

### chore

```bash
🪨 chore: <mensaje>

Explica cambios que se han hecho en los tools. Ej:

chore: update webpack version
```

### feat|fix|docs|style|refactor|test|chore

```bash
🤯 {feat|fix|docs|style|refactor|test|chore}(scope): <mensaje>

Si quisieras ser más explicito, puedes agregar el scope del cambio,
básicamente la sección que se esta modificando. Ej:

feat(home): add new hero section
```

## Integración de cambios

Toda integración a ramas principales se deberá hacer mediante pull request.

# <a name="conventions"></a> Convenciones de Nomenclatura 📝

Para mantener la coherencia y la legibilidad en nuestro proyecto, seguimos las siguientes convenciones de nomenclatura:

### Nombres de Archivos 📄

Los nombres de los archivos deben seguir el formato camel case. Camel case es un estilo de escritura para identificadores de palabras compuestas en los que cada palabra, excepto la primera, comienza con una letra mayúscula y las palabras se escriben sin espacios ni caracteres de puntuación. La primera palabra comienza con una letra minúscula.

Ejemplos de camel case:

- `miArchivo.js`
- `nombreDeUsuario.vue`
- `estoEsCamelCase.html`

### Nombres de Carpetas 📁

Los nombres de las carpetas deben seguir el formato kebab case. Kebab case es un estilo de escritura en el que las palabras se escriben en minúsculas y se separan por guiones.

Ejemplos de kebab case:

- `mi-carpeta`
- `nombre-de-usuario`
- `esto-es-kebab-case`
