import { serve } from "inngest/next";
import { inngest, sycnUserUpdate, syncUserCreation } from "@/config/inngest";


export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [
        syncUserCreation,
        sycnUserUpdate,
        syncUserCreation
    ],
});
