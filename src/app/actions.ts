'use server';

import { generatePersonalizedBirthdayMessage } from '@/ai/flows/generate-personalized-birthday-message';
import { type BirthdayMessageSchema } from '@/lib/schemas';

export async function generateMessageAction(data: BirthdayMessageSchema): Promise<{
  message?: string;
  error?: string;
}> {
  try {
    const result = await generatePersonalizedBirthdayMessage({
      ...data,
      culturalContext: 'Indian',
    });

    if (!result.message) {
      return { error: 'Failed to generate message. The AI could not produce a response. Please try again.' };
    }
    
    // Add emojis for a more festive feel
    const festiveMessage = `🎉✨ ${result.message} 🎂🙏`;
    
    return { message: festiveMessage };
  } catch (e) {
    console.error(e);
    return { error: 'An unexpected error occurred on our server. Please try again later.' };
  }
}
