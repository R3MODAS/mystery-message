import { z } from "zod";

export const messageSchema = z.object({
  content: z
    .string({ required_error: "Content is required" })
    .min(10, { message: "Content must be atleast 10 characters" })
    .max(300, { message: "Content must not exceed 300 characters" }),
});
