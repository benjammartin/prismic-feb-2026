Bun.serve({
  port: 3000,
  routes: {
    "/api/status": () => new Response("OK"),
    "/api/generate": {
      POST: async (req) => {
        const body = (await req.json().catch(() => ({}))) as {
          content?: string;
        };
        const content = body.content ?? "";
        // content is available here for use
        return Response.json({
          score: 92,
          blockingIssues: {
            count: 1,
            description: "These must be fixed before publishing:",
            items: ["A RichText field exceeds the character limit"],
          },
          needsImprovement: {
            count: 1,
            description: "Not blocking, but should be addressed:",
            items: ["A Alt text is empty"],
          },
          guidelinesMet: {
            count: 3,
          },
        });
      },
    },
  },
  fetch() {
    return new Response("Not Found", { status: 404 });
  },
});

console.log("Server running at http://localhost:3000");
