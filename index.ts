Bun.serve({
  port: 3000,
  routes: {
    "/api/status": () => new Response("OK"),
    "/api/generate": {
      POST: async (req) => {
        const body = await req.json();
        console.log("Received:", body);
        return Response.json({ success: true, received: body });
      },
    },
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
