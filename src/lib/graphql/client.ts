export const fetchGraphQL = async (
  query: string,
  variables?: Record<string, unknown>
) => {
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await response.json();

  return json.data;
};