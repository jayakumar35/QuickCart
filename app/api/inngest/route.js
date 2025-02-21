import { serve } from "inngest/next";
import { inngest, sycnUserUpdation, syncUserCreation, syncUserDeletion, } from "@/config/inngest";

export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
      syncUserCreation,
      sycnUserUpdation,
      syncUserDeletion
    ],
});