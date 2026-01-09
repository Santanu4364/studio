'use server';

/**
 * @fileOverview Generates a personalized and culturally relevant birthday message using AI.
 *
 * - generatePersonalizedBirthdayMessage - A function that generates the birthday message.
 * - GeneratePersonalizedBirthdayMessageInput - The input type for the generatePersonalizedBirthdayMessage function.
 * - GeneratePersonalizedBirthdayMessageOutput - The return type for the generatePersonalizedBirthdayMessage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GeneratePersonalizedBirthdayMessageInputSchema = z.object({
  studentName: z.string().describe('The name of the student receiving the birthday message.'),
  interests: z.string().describe('The interests of the student.'),
  culturalContext: z.string().optional().describe('Any specific cultural context to consider. Defaults to Indian if not specified.'),
  includeCulturalElements: z.boolean().describe('Whether or not to include cultural elements.'),
});
export type GeneratePersonalizedBirthdayMessageInput = z.infer<typeof GeneratePersonalizedBirthdayMessageInputSchema>;

const GeneratePersonalizedBirthdayMessageOutputSchema = z.object({
  message: z.string().describe('The personalized birthday message.'),
});
export type GeneratePersonalizedBirthdayMessageOutput = z.infer<typeof GeneratePersonalizedBirthdayMessageOutputSchema>;

export async function generatePersonalizedBirthdayMessage(
  input: GeneratePersonalizedBirthdayMessageInput
): Promise<GeneratePersonalizedBirthdayMessageOutput> {
  return generatePersonalizedBirthdayMessageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generatePersonalizedBirthdayMessagePrompt',
  input: {schema: GeneratePersonalizedBirthdayMessageInputSchema},
  output: {schema: GeneratePersonalizedBirthdayMessageOutputSchema},
  prompt: `You are an AI assistant tasked with generating personalized and inspiring birthday messages for students.

  The message should be motivational and tailored to the student's interests.

  Student Name: {{{studentName}}}
  Interests: {{{interests}}}
  Cultural Context: {{{culturalContext}}}
  Include Cultural Elements: {{#if includeCulturalElements}}Yes{{else}}No{{/if}}

  Generate a birthday message that is appropriate for a student, incorporating their interests and the specified cultural context, if any.
  If cultural elements is true, include a relevant Indian cultural element in the message.
  `,
});

const generatePersonalizedBirthdayMessageFlow = ai.defineFlow(
  {
    name: 'generatePersonalizedBirthdayMessageFlow',
    inputSchema: GeneratePersonalizedBirthdayMessageInputSchema,
    outputSchema: GeneratePersonalizedBirthdayMessageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
