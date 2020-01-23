# Usage

Use a GraphQL Client to access the Graphql Endpoint.

To use Playground (local environment), just access [http://localhost:3000/graphql](http://localhost:3000/graphql) in your browser.

## Queries

- List all products:

````graphql
query {
  products {
    id
    name
    createdAt
    updatedAt
  }
}
````

- Get a product:

````graphql
query {
  product(id: 1) {
    id
    name
    createdAt
    updatedAt
  }
}
````

## Mutations

- Create a product:

````graphql
mutation {
  createProduct(data: { name: "Product 1" }) {
    id
    name
    createdAt
    updatedAt
  }
}
````

- Update a product:

````graphql
mutation {
  updateProduct(id: 1, data: { name: "New name" }) {
    id
    name
    createdAt
    updatedAt
  }
}
````

- Delete a product:

````graphql
mutation {
  deleteProduct(id: 1)
}
````
