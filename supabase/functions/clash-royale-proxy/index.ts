import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import ClashRoyaleAPI from "npm:clash-royale-api@3.0.0";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { endpoint } = await req.json();
    const API_KEY = Deno.env.get('CLASH_ROYALE_API_KEY');
    
    if (!API_KEY) {
      throw new Error('CLASH_ROYALE_API_KEY is not configured');
    }

    if (!endpoint) {
      throw new Error('Endpoint is required');
    }

    console.log('Fetching Clash Royale API:', endpoint);

    // Initialize the API client
    const api = new ClashRoyaleAPI(API_KEY);
    
    let data;
    
    // Parse the endpoint and call the appropriate method
    if (endpoint.startsWith('/players/')) {
      const playerTag = endpoint.split('/players/')[1].split('/')[0];
      if (endpoint.includes('/upcomingchests')) {
        data = await api.playerUpcomingChests(decodeURIComponent(playerTag));
      } else if (endpoint.includes('/battlelog')) {
        data = await api.playerBattles(decodeURIComponent(playerTag));
      } else {
        data = await api.player(decodeURIComponent(playerTag));
      }
    } else if (endpoint.startsWith('/clans/')) {
      const clanTag = endpoint.split('/clans/')[1];
      data = await api.clan(decodeURIComponent(clanTag));
    } else if (endpoint.includes('/rankings/players')) {
      const limit = new URL(`http://dummy.com${endpoint}`).searchParams.get('limit') || '100';
      if (endpoint.includes('/locations/global/')) {
        data = await api.topPlayers({ limit: parseInt(limit) });
      }
    } else if (endpoint.includes('/rankings/clans')) {
      const limit = new URL(`http://dummy.com${endpoint}`).searchParams.get('limit') || '100';
      data = await api.topClans({ limit: parseInt(limit) });
    } else if (endpoint === '/locations') {
      data = await api.locations();
    } else {
      throw new Error(`Unsupported endpoint: ${endpoint}`);
    }

    console.log('Clash Royale API success');

    return new Response(
      JSON.stringify(data),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in clash-royale-proxy:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
