Bun.serve({
  port: 3000,
  routes: {
    "/api/status": () => new Response("OK"),
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
