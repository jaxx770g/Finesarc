import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "finesarc-platform", // Unique app ID
  name: "FinesArc Platform", // Human-readable app name
  retryFunction: async (attempt) => ({
    delay: Math.pow(2, attempt) * 1000, // Exponential backoff
    maxAttempts: 2,
  }),
});
