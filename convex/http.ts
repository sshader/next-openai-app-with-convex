import { Hono } from "hono";
import { HonoWithConvex, HttpRouterWithHono } from "convex-helpers/server/hono";
import { ActionCtx } from "./_generated/server";
import { cors } from "hono/cors";
import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

const app: HonoWithConvex<ActionCtx> = new Hono();

// See the [guide on Stack](https://stack.convex.dev/hono-with-convex)
// for tips on using Hono for HTTP endpoints.

app.use("/api/*", cors());

app.post("/api/chat", async (c) => {
  // Extract the `messages` from the body of the request
  const { messages } = await c.req.json();

  // Call the language model
  const result = await streamText({
    model: openai("gpt-4-turbo"),
    messages,
    async onFinish({ text, toolCalls, toolResults, usage, finishReason }) {
      // implement your own logic here, e.g. for storing messages
      // or recording token usage
    },
  });

  // Respond with the stream
  return result.toAIStreamResponse();
});

export default new HttpRouterWithHono(app);
