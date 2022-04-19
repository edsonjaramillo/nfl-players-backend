import { FastifyPluginAsync } from 'fastify';
import { FastifySupabaseClientType, RequestTeamType } from '../types/supabase';
import { playersQuery } from './players';

const playersByTeam: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.post('/playersbyteam', async (request, reply) => {
    const { supabase }: FastifySupabaseClientType = fastify;
    const { team } = request.body as RequestTeamType;
    const { data: players } = await supabase
      .from('players')
      .select(playersQuery)
      .eq('team', team);
    return reply.code(200).send(players);
  });
};

export default playersByTeam;
