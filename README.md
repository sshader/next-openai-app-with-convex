# Vercel AI SDK, Next.js, and OpenAI Chat Example -- with Convex!

This is taken from [this example](https://github.com/vercel/ai/tree/main/examples/next-openai) which shows how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/) and [OpenAI](https://openai.com) to create a ChatGPT-like AI-powered streaming chat bot.

This has been adapted to use [Convex](https://www.convex.dev/) to power the chat bot.

To run the example locally you need to:

1. `npm install` to install the required dependencies
2. `npx convex dev --once` to set up a Convex project
3. Sign up at [OpenAI's Developer Platform](https://platform.openai.com/signup).
4. Go to [OpenAI's dashboard](https://platform.openai.com/account/api-keys) and create an API KEY.
5. Set the required OpenAI environment variable as `OPENAI_API_KEY` in the [Convex dashboard](https://dashboard.convex.dev)
5. `npm dev` to launch the app.

There is also an example of this same chat bot using [Hono](https://hono.dev/) with Convex HTTP actions on the `hono-convex` branch.
