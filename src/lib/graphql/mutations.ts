export const ADD_PRODUCT = `
  mutation AddProduct($input: AddProductInput!) {
    addProduct(input: $input) {
      id
      name
      price
      stock
    }
  }
`;
export const UPDATE_PRODUCT = `
  mutation UpdateProduct($id: ID!, $input: UpdateProductInput!) {
    updateProduct(id: $id, input: $input) {
      id
      name
      price
      stock
    }
  }
`;

// ($input: AddProductInput!) => Backend e bir input gondrecegim demek ! required demek