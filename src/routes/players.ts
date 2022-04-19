import { FastifyPluginAsync } from 'fastify';
import { FastifySupabaseClientType } from '../types/supabase';

export const playersQuery = 'id, name, team, position, status';

const getPlayers: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/players', async function (request, reply) {
    const { supabase }: FastifySupabaseClientType = fastify;
    const { data: players } = await supabase.from('players').select(playersQuery);

    return reply.code(200).send(players);
  });
};

export default getPlayers;
