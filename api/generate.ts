export const config = {
  runtime: "edge",
};

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const body = (await request.json().catch(() => ({}))) as {
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
}
