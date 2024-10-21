# Water Dashboard

A modern Vue 3 application for water management and monitoring.

## Project Overview

This project is a water dashboard built with Vue 3 and Vite, utilizing TypeScript for enhanced type safety and developer experience. It incorporates PrimeVue for UI components and follows best practices for modern web development.

## Features

- Vue 3 with Composition API
- TypeScript support
- Vite for fast development and building
- PrimeVue for UI components
- ESLint and Biome for code quality
- Vitest for unit testing
- Docker support for containerization
- GitHub Actions for CI/CD

## Recommended IDE Setup

We recommend using [VSCode](https://code.visualstudio.com/) with the following extensions:

- [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (disable Vetur if installed)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)

## Project Setup

```sh
pnpm install
```

### Compile and Hot-Reload for Development

```sh
pnpm dev
```

### Compile and Minify for Production

```sh
pnpm build
```

### Preview Production Build

```sh
pnpm preview
```

### Run Unit Tests

```sh
pnpm test
```

### Linting and Formatting

To run linting:

```sh
pnpm lint
```

To format code:

```sh
pnpm format
```

## Docker

This project includes Docker support for easy containerization and deployment.

### Building and Running with Docker

To build and run the application using Docker:

```sh
docker-compose -f docker/docker-compose.yml up --build
```

This command will build the Docker image and start the container. The application will be accessible at `http://localhost:3000` (or the port specified in your environment).

### Docker Configuration

- The `Dockerfile` is located at `docker/app/Dockerfile`
- The `docker-compose.yml` file is located at `docker/docker-compose.yml`
- The Docker setup uses a multi-stage build process for optimization
- The application runs on port 3000 by default, but this can be configured using the `PORT` environment variable

## CI/CD

This project uses GitHub Actions for continuous integration and deployment. The workflow is defined in `.github/workflows/ci.yml`.

### CI Workflow

The CI process includes the following steps:

1. Checkout the code
2. Set up Node.js
3. Install pnpm
4. Install dependencies
5. Run Biome for linting
6. Run ESLint
7. Run tests

The workflow is triggered on pushes to the `main` branch and on pull requests targeting the `main` branch.



## License

[MIT License](LICENSE)
