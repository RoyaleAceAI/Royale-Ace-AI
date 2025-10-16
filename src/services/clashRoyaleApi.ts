// Clash Royale API Service using Supabase Edge Function
import { supabase } from "@/integrations/supabase/client";

export interface Player {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role?: string;
  donations?: number;
  donationsReceived?: number;
  totalDonations?: number;
  warDayWins?: number;
  clanCardsCollected?: number;
  clan?: {
    tag: string;
    name: string;
    badgeId: number;
  };
  arena: {
    id: number;
    name: string;
  };
  badges?: Badge[];
  achievements?: Achievement[];
  cards?: Card[];
  currentDeck?: Card[];
  currentFavouriteCard?: {
    name: string;
    id: number;
    maxLevel: number;
    iconUrls: {
      medium: string;
    };
  };
  starPoints?: number;
  pathOfLegendSeasonResult?: {
    leagueNumber: number;
    trophies: number;
    rank: number;
  };
}

export interface Badge {
  name: string;
  level?: number;
  maxLevel?: number;
  progress?: number;
  target?: number;
  iconUrls: {
    large?: string;
  };
}

export interface Achievement {
  name: string;
  stars: number;
  value: number;
  target: number;
  info: string;
  completionInfo: string;
}

export interface Card {
  name: string;
  id: number;
  level: number;
  maxLevel: number;
  count?: number;
  iconUrls: {
    medium: string;
  };
}

export interface Clan {
  tag: string;
  name: string;
  type: string;
  description: string;
  badgeId: number;
  clanScore: number;
  clanWarTrophies: number;
  location?: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode?: string;
  };
  requiredTrophies: number;
  donationsPerWeek: number;
  clanChestStatus: string;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  members: number;
  memberList?: ClanMember[];
}

export interface ClanMember {
  tag: string;
  name: string;
  role: string;
  lastSeen: string;
  expLevel: number;
  trophies: number;
  arena: {
    id: number;
    name: string;
  };
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  clanChestPoints?: number;
}

export interface LeaderboardPlayer {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  rank: number;
  previousRank?: number;
  clan?: {
    tag: string;
    name: string;
    badgeId: number;
  };
  arena: {
    id: number;
    name: string;
  };
}

class ClashRoyaleAPI {
  private async fetchAPI(endpoint: string) {
    try {
      const { data, error } = await supabase.functions.invoke('clash-royale-proxy', {
        body: { endpoint }
      });
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Clash Royale API Error:', error);
      throw error;
    }
  }

  // Format player tag for API (add # if missing, encode)
  private formatTag(tag: string): string {
    const formattedTag = tag.startsWith('#') ? tag : `#${tag}`;
    return encodeURIComponent(formattedTag);
  }

  // Get player information
  async getPlayer(playerTag: string): Promise<Player> {
    const tag = this.formatTag(playerTag);
    return this.fetchAPI(`/players/${tag}`);
  }

  // Get player's upcoming chests
  async getPlayerUpcomingChests(playerTag: string) {
    const tag = this.formatTag(playerTag);
    return this.fetchAPI(`/players/${tag}/upcomingchests`);
  }

  // Get player's battle log
  async getPlayerBattleLog(playerTag: string) {
    const tag = this.formatTag(playerTag);
    return this.fetchAPI(`/players/${tag}/battlelog`);
  }

  // Get clan information
  async getClan(clanTag: string): Promise<Clan> {
    const tag = this.formatTag(clanTag);
    return this.fetchAPI(`/clans/${tag}`);
  }

  // Get top players globally
  async getGlobalLeaderboard(limit: number = 100): Promise<{ items: LeaderboardPlayer[] }> {
    return this.fetchAPI(`/locations/global/rankings/players?limit=${limit}`);
  }

  // Get top players by country
  async getLocationLeaderboard(locationId: number, limit: number = 100): Promise<{ items: LeaderboardPlayer[] }> {
    return this.fetchAPI(`/locations/${locationId}/rankings/players?limit=${limit}`);
  }

  // Get Path of Legends leaderboard (global)
  async getPathOfLegendsLeaderboard(seasonId: string, limit: number = 100) {
    return this.fetchAPI(`/locations/global/seasons/${seasonId}/rankings/players?limit=${limit}`);
  }

  // Get top clans globally
  async getGlobalClanLeaderboard(limit: number = 100) {
    return this.fetchAPI(`/locations/global/rankings/clans?limit=${limit}`);
  }

  // Get all available locations
  async getLocations() {
    return this.fetchAPI('/locations');
  }

  // Get current season info for Path of Legends
  async getCurrentSeason() {
    // Path of Legends seasons endpoint
    return this.fetchAPI('/locations/global/seasons');
  }

  // Search clans
  async searchClans(params: {
    name?: string;
    locationId?: number;
    minMembers?: number;
    maxMembers?: number;
    minScore?: number;
    limit?: number;
  }) {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) {
        queryParams.append(key, value.toString());
      }
    });
    return this.fetchAPI(`/clans?${queryParams.toString()}`);
  }
}

export const clashRoyaleApi = new ClashRoyaleAPI();
