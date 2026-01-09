import { z } from 'zod';

export const birthdayMessageSchema = z.object({
  studentName: z.string().min(2, { message: 'Name must be at least 2 characters.' }).max(50, { message: 'Name cannot be longer than 50 characters.' }),
  interests: z.string().min(3, { message: 'Please describe at least one interest.' }).max(200, { message: 'Interests cannot be longer than 200 characters.' }),
  includeCulturalElements: z.boolean().default(false),
});

export type BirthdayMessageSchema = z.infer<typeof birthdayMessageSchema>;
