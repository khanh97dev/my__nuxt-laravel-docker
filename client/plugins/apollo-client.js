export default (context) => {
  return {
    httpEndpoint: process.env.API_ENDPOINT || 'http://nginx:81/graphql',

    /*
     * For permanent authentication provide `getAuth` function.
     * The string returned will be used in all requests as authorization header
     */
    // getAuth: () => 'Bearer token',
  }
}
