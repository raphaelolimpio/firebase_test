// src/ai/flows/product-recommendation.ts
'use server';
/**
 * @fileOverview Recommends products to a user based on their browsing history.
 *
 * - recommendProducts - A function that takes a user's browsing history and returns a list of recommended products.
 * - RecommendProductsInput - The input type for the recommendProducts function.
 * - RecommendProductsOutput - The return type for the recommendProducts function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';
import {Product, getProducts} from '@/services/ferraco-palmas';

const RecommendProductsInputSchema = z.object({
  browsingHistory: z
    .array(z.string())
    .describe('An array of product IDs representing the user\'s browsing history.'),
});
export type RecommendProductsInput = z.infer<typeof RecommendProductsInputSchema>;

const RecommendProductsOutputSchema = z.object({
  recommendedProducts: z
    .array(z.string())
    .describe('An array of product IDs representing the recommended products.'),
});
export type RecommendProductsOutput = z.infer<typeof RecommendProductsOutputSchema>;

export async function recommendProducts(input: RecommendProductsInput): Promise<RecommendProductsOutput> {
  return recommendProductsFlow(input);
}

const productRecommendationPrompt = ai.definePrompt({
  name: 'productRecommendationPrompt',
  input: {
    schema: z.object({
      browsingHistory: z
        .array(z.string())
        .describe('An array of product IDs representing the user\'s browsing history.'),
      availableProducts: z.string().describe('A stringified JSON array of all products available'),
    }),
  },
  output: {
    schema: z.object({
      recommendedProducts: z
        .array(z.string())
        .describe('An array of product IDs representing the recommended products.'),
    }),
  },
  prompt: `You are an expert product recommendation engine.

  Based on the user's browsing history, recommend products that they might be interested in.

  Here is the user's browsing history (product IDs):
  {{browsingHistory}}

  Here are the available products:
  {{availableProducts}}

  Only return product IDs from the available products.
  Do not include any products that are already in the browsing history.
  Make sure to return a JSON array of product IDs.
  `,
});

const recommendProductsFlow = ai.defineFlow<
  typeof RecommendProductsInputSchema,
  typeof RecommendProductsOutputSchema
>(
  {
    name: 'recommendProductsFlow',
    inputSchema: RecommendProductsInputSchema,
    outputSchema: RecommendProductsOutputSchema,
  },
  async input => {
    const products = await getProducts();
    const availableProducts = JSON.stringify(products);

    const {output} = await productRecommendationPrompt({
      ...input,
      availableProducts,
    });
    return output!;
  }
);
