export const config = {
  runtime: "edge",
};

export default function handler(_request: Request) {
  return Response.json({ ok: true, success: true });
}
