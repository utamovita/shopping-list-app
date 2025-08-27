import { z } from 'zod';

const envSchema = z.object({
  NEXT_PUBLIC_API_URL: z.string().url({ message: 'Invalid API URL' }),
});

const clientEnv = {
  NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
};

const parsedEnv = envSchema.safeParse(clientEnv);

if (!parsedEnv.success) {
  console.error(
    '❌ Invalid environment variables:',
    parsedEnv.error.format(),
  );
  throw new Error('Invalid environment variables.');
}

export const env = parsedEnv.data;