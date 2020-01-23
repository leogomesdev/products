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
  }
}
````

## Mutations

- Create a product:

````graphql
mutation {
  createProduct(name: "Product 1") {
    id
    name
  }
}
````

- Update a product:

````graphql
mutation {
  updateProduct(id: 0, name: "New name") {
    id
    name
  }
}
````

- Delete a product:

````graphql
mutation {
  deleteProduct(id: 0)
}
````
