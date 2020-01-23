# Products

This is a GraphQL application to manage Products.
A product has:

- id (provided by the system)
- name (String, Required)
- createdAt (provided by the system)
- updatedAt (provided by the system)

This application use a "in-memory" variable to store the data. Once restarted, all data will be reset.

## Description

Build with [Nest](https://github.com/nestjs/nest) framework

## Requirements

- npm
- Node.js

## Installation

```bash
  npm install
```

## Running the app

This app use the default port 3000. To change it, define the environment PORT. In a local environment, just copy (and edit the .env file):

````bash
cp -v .env.example .env
````

```bash
# development
  npm run start

# watch mode
  npm run start:dev

# production mode
  npm run start:prod
```

## Usage

Please check [docs/USAGE.md](docs/USAGE.md)

## Test

```bash
# unit tests
  npm run test

# e2e tests
  npm run test:e2e

# test coverage
  npm run test:cov
```

## License

  Nest is [MIT licensed](LICENSE).