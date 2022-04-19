import { FastifyPluginAsync } from 'fastify';
import { FastifySupabaseClientType, PositionBodyRequestType } from '../types/supabase';
import { playersQuery } from './players';

const playersByPosition: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/playersbyposition', async (request, reply) => {
    const { supabase }: FastifySupabaseClientType = fastify;
    const { position } = request.body as PositionBodyRequestType;
    const { data: players } = await supabase
      .from('players')
      .select(playersQuery)
      .eq('position', position);
    return reply.code(200).send(players);
  });
};

export default playersByPosition;
