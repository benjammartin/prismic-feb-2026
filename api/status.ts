export const config = {
  runtime: "edge",
};

export default function handler(_request: Request) {
  return new Response("OK");
}
