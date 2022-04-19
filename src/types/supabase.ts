import { SupabaseClient } from '@supabase/supabase-js';

export interface FastifySupabaseClientType {
  supabase: SupabaseClient;
}

export interface RequestTeamType {
  team: string;
}

export interface TeamBodyRequestType {
  team: string;
}

export interface StatusBodyRequestType {
  status: string;
}

export interface PositionBodyRequestType {
  position: string;
}

export interface PlayerResponseType {
  id: string;
  created_at: string;
  name: string;
  team: string;
  position: string;
  status: string;
}
