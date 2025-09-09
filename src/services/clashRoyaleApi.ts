// Clash Royale API Service
// Note: In production, this should use Supabase Edge Functions for security
const API_BASE_URL = 'https://api.clashroyale.com/v1';

// This is a private API key - for development only
// In production, use Supabase Edge Functions or environment variables
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjNmNjA4Yzk4LWM3YmQtNGExYi05ZTc5LTUyOTk1Y2YyMWJiMiIsImlhdCI6MTc1NzI5NDE1Miwic3ViIjoiZGV2ZWxvcGVyLzc1YTU2MTdjLTNmMjMtZGRjNi0xOTVkLTFiYzBlMWRhZGViMSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyI1MS44MS45My43NSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.pExQwh9u1jOzSFb25oG2IpS1DNYMV9dco8mC7E0u62qUfeKZwkQu1kDyTOd4rFIj7wUPtDnIOZ3EykOFum18yg';

const USE_DEV_PROXY = true;
const PROXY_URL = 'https://proxy.cors.sh';

const getHeaders = (useProxy: boolean) => {
  const key = typeof window !== 'undefined' ? (localStorage.getItem('CR_API_KEY') || API_KEY) : API_KEY;
  const h: Record<string, string> = {
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json'
  };
  if (useProxy) {
    (h as any)['x-cors-api-key'] = 'temp';
  }
  return h;
};

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
      const url = `${USE_DEV_PROXY ? PROXY_URL : ''}${API_BASE_URL}${endpoint}`;
      const response = await fetch(url, { headers: getHeaders(USE_DEV_PROXY) });
      
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Player or resource not found');
        }
        if (response.status === 403) {
          throw new Error('API key invalid or IP not authorized');
        }
        throw new Error(`API Error: ${response.status}`);
      }
      
      return await response.json();
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
    return this.fetchAPI(`/locations/global/pathoflegend/${seasonId}/rankings/players?limit=${limit}`);
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
    return this.fetchAPI('/locations/global/pathoflegend');
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