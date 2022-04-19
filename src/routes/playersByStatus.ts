import { FastifyPluginAsync } from 'fastify';
import { FastifySupabaseClientType, StatusBodyRequestType } from '../types/supabase';
import { playersQuery } from './players';

const playersByStatus: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/playersbystatus', async (request, reply) => {
    const { supabase }: FastifySupabaseClientType = fastify;
    const { status } = request.body as StatusBodyRequestType;
    const { data: players } = await supabase
      .from('players')
      .select(playersQuery)
      .eq('status', status);
    return reply.code(200).send(players);
  });
};

export default playersByStatus;
