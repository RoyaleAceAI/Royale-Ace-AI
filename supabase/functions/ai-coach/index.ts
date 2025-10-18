import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { playerData, replayData } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    console.log('AI Coach analyzing player data...');

    const systemPrompt = `You are an expert Clash Royale AI coach. Analyze player statistics and provide personalized coaching advice. Focus on:
- Win rate and battle performance analysis
- Deck composition and card level recommendations
- Trophy progression and competitive strategy
- Arena-specific tactics and improvements
- Resource management and upgrade priorities

Provide actionable, specific advice that helps players improve their gameplay.`;

    const userPrompt = `Analyze this Clash Royale player's stats and provide coaching advice:

Player Tag: ${playerData?.tag || 'Unknown'}
Trophies: ${playerData?.trophies || 0}
Best Trophies: ${playerData?.bestTrophies || 0}
Wins: ${playerData?.wins || 0}
Losses: ${playerData?.losses || 0}
Level: ${playerData?.expLevel || 0}
Arena: ${playerData?.arena?.name || 'Unknown'}

${replayData ? `Recent Battle Data: ${JSON.stringify(replayData)}` : ''}

Provide:
1. Overall performance assessment
2. Key strengths and weaknesses
3. Specific improvement recommendations
4. Deck building advice
5. Trophy pushing strategies`;

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Payment required. Please add credits to your workspace.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      const errorText = await response.text();
      console.error('AI Gateway error:', response.status, errorText);
      throw new Error('AI Gateway request failed');
    }

    const data = await response.json();
    const coaching = data.choices[0].message.content;

    console.log('AI Coach analysis complete');

    return new Response(
      JSON.stringify({ coaching }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in ai-coach function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
