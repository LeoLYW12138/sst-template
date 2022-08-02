import { StackContext, GraphQLApi } from "@serverless-stack/resources";

export function Api({ stack }: StackContext) {
  const api = new GraphQLApi(stack, "ApolloApi", {
    server: {
      handler: "functions/graphql.handler",
      bundle: {
        format: "cjs",
      },
      environment: {
        BASEROW_PASSWORD: process.env.BASEROW_PASSWORD!,
      },
    },
  });

  // Show the API endpoint in output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  return api;
}
