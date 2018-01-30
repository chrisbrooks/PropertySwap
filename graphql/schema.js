// eslint-disable-next-line
export const typeDefs = `
schema {
  query: RootQuery
}

type RootQuery {
  viewer: Viewer!
}

type Viewer {
  results: [Result]
  saved: [Saved]
}

type Result {
  id: ID!
  price: String!
  agency: Agency!
  mainImage: String!
}

type Saved {
  id: ID!
  price: String!
  agency: Agency!
  mainImage: String!
}

type Agency {
  brandingColors: BrandColors!
  logo: String!
}

type BrandColors {
  primary: String!
}
`;
