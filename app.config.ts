export default ({ config }) => ({
  ...config,
  extra: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000",
    GRAPHQL_API_URL: process.env.BASE_URL + process.env.GRAPHQL_ENDPOINT,
    REST_API_URL: process.env.BASE_URL + process.env.REST_ENDPOINT,
    GRAPHQL_API_TOKEN: process.env.GRAPHQL_API_TOKEN,
  },
});
