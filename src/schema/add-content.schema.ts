import { z } from 'zod';

export const AddContentSchema = z.object({
    content: z.string().min(3).max(1000),
});

export type AddContentSchemaType = z.infer<typeof AddContentSchema>;
