import fp from 'fastify-plugin';
import supabase from 'fastify-supabase';
import 'dotenv/config';

export default fp(async (fastify, opts) => {
  const supabaseURL = process.env.SUPABASE_URL as string;
  const supabaseKey = process.env.SUPABASE_KEY as string;
  fastify.register(supabase, {
    supabaseUrl: supabaseURL,
    supabaseKey: supabaseKey,
  });
});
