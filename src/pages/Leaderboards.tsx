import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Trophy, Crown, TrendingUp, Users, Globe, Medal, ChevronUp, ChevronDown, Minus } from "lucide-react";
import { clashRoyaleApi, type LeaderboardPlayer } from "@/services/clashRoyaleApi";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Leaderboards = () => {
  const [globalPlayers, setGlobalPlayers] = useState<LeaderboardPlayer[]>([]);
  const [pathOfLegendsPlayers, setPathOfLegendsPlayers] = useState<LeaderboardPlayer[]>([]);
  const [clans, setClans] = useState<any[]>([]);
  const [locations, setLocations] = useState<any[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [locationPlayers, setLocationPlayers] = useState<LeaderboardPlayer[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentSeason, setCurrentSeason] = useState<string>("");
  const [apiKeyInput, setApiKeyInput] = useState<string>(typeof window !== 'undefined' ? (localStorage.getItem('CR_API_KEY') || '') : '');
  const { toast } = useToast();
  const navigate = useNavigate();

  const saveApiKey = () => {
    try {
      localStorage.setItem('CR_API_KEY', apiKeyInput.trim());
      toast({ title: "API Key saved", description: "Your Clash Royale API key was saved locally." });
    } catch {
      toast({ title: "Failed to save key", description: "Please try again.", variant: "destructive" });
    }
  };

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      setLoading(true);
      
      // Load global leaderboard
      const globalData = await clashRoyaleApi.getGlobalLeaderboard(50);
      setGlobalPlayers(globalData.items);

      // Load locations
      const locationsData = await clashRoyaleApi.getLocations();
      setLocations(locationsData.items.filter((loc: any) => loc.isCountry));

      // Load global clan leaderboard
      const clanData = await clashRoyaleApi.getGlobalClanLeaderboard(50);
      setClans(clanData.items);

      // Load current Path of Legends season
      const seasonData = await clashRoyaleApi.getCurrentSeason();
      if (seasonData?.items?.length > 0) {
        const currentSeasonId = seasonData.items[0].id;
        setCurrentSeason(currentSeasonId);
        
        // Load Path of Legends leaderboard
        const pathData = await clashRoyaleApi.getPathOfLegendsLeaderboard(currentSeasonId, 50);
        setPathOfLegendsPlayers(pathData.items);
      }
    } catch (error: any) {
      console.error('Error loading leaderboards:', error);
      toast({
        title: "Error",
        description: "Failed to load leaderboard data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const loadLocationLeaderboard = async (locationId: number) => {
    try {
      const data = await clashRoyaleApi.getLocationLeaderboard(locationId, 50);
      setLocationPlayers(data.items);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to load location leaderboard",
        variant: "destructive",
      });
    }
  };

  const getRankChange = (current: number, previous?: number) => {
    if (!previous) return null;
    const change = previous - current;
    if (change > 0) {
      return (
        <span className="flex items-center text-green-500 text-xs">
          <ChevronUp className="w-3 h-3" />
          {change}
        </span>
      );
    } else if (change < 0) {
      return (
        <span className="flex items-center text-red-500 text-xs">
          <ChevronDown className="w-3 h-3" />
          {Math.abs(change)}
        </span>
      );
    }
    return <Minus className="w-3 h-3 text-muted-foreground" />;
  };

  const getRankBadge = (rank: number) => {
    if (rank === 1) return "🥇";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return `#${rank}`;
  };

  const PlayerRow = ({ player, index }: { player: LeaderboardPlayer; index: number }) => (
    <div
      className={`flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors cursor-pointer ${
        index < 3 ? 'bg-gradient-to-r from-primary/10 to-transparent' : ''
      }`}
      onClick={() => navigate(`/player/${player.tag.replace('#', '')}`)}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold w-12 text-center">
          {getRankBadge(player.rank)}
        </div>
        <div className="flex items-center gap-2">
          {getRankChange(player.rank, player.previousRank)}
        </div>
        <div>
          <p className="font-semibold text-lg">{player.name}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Level {player.expLevel}</span>
            {player.clan && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Users className="w-3 h-3" />
                  {player.clan.name}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xl font-bold">
        <Trophy className="w-5 h-5 text-primary" />
        {player.trophies.toLocaleString()}
      </div>
    </div>
  );

  const ClanRow = ({ clan, index }: { clan: any; index: number }) => (
    <div
      className={`flex items-center justify-between p-4 rounded-lg hover:bg-muted/50 transition-colors ${
        index < 3 ? 'bg-gradient-to-r from-primary/10 to-transparent' : ''
      }`}
    >
      <div className="flex items-center gap-4">
        <div className="text-2xl font-bold w-12 text-center">
          {getRankBadge(index + 1)}
        </div>
        <div>
          <p className="font-semibold text-lg">{clan.name}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{clan.members}/50 members</span>
            {clan.location && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {clan.location.name}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-center gap-2 text-xl font-bold">
          <Trophy className="w-5 h-5 text-primary" />
          {clan.clanScore.toLocaleString()}
        </div>
        <p className="text-sm text-muted-foreground">
          War Trophies: {clan.clanWarTrophies}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Leaderboards
          </h1>
          <p className="text-muted-foreground mb-3">
            Top players and clans from around the world
          </p>
          <div className="flex gap-2 max-w-2xl">
            <input
              className="flex-1 bg-background border border-border rounded-md px-3 py-2 text-sm"
              placeholder="Enter Clash Royale API key (stored locally)"
              value={apiKeyInput}
              onChange={(e) => setApiKeyInput(e.target.value)}
            />
            <button onClick={saveApiKey} className="px-4 py-2 rounded-md bg-primary text-primary-foreground text-sm">
              Save Key
            </button>
          </div>
        </div>

        <Tabs defaultValue="global" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="global">
              <Trophy className="w-4 h-4 mr-2" />
              Global
            </TabsTrigger>
            <TabsTrigger value="pathoflegends">
              <TrendingUp className="w-4 h-4 mr-2" />
              Path of Legends
            </TabsTrigger>
            <TabsTrigger value="location">
              <Globe className="w-4 h-4 mr-2" />
              By Location
            </TabsTrigger>
            <TabsTrigger value="clans">
              <Users className="w-4 h-4 mr-2" />
              Top Clans
            </TabsTrigger>
          </TabsList>

          <TabsContent value="global" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Medal className="w-6 h-6 text-primary" />
                  Global Top Players
                </CardTitle>
                <CardDescription>
                  The best players worldwide by trophy count
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Loading...</div>
                ) : (
                  <div className="divide-y">
                    {globalPlayers.map((player, index) => (
                      <PlayerRow key={player.tag} player={player} index={index} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pathoflegends" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-primary" />
                  Path of Legends Rankings
                </CardTitle>
                <CardDescription>
                  Top ranked players in the current season
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Loading...</div>
                ) : pathOfLegendsPlayers.length > 0 ? (
                  <div className="divide-y">
                    {pathOfLegendsPlayers.map((player, index) => (
                      <PlayerRow key={player.tag} player={player} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    No Path of Legends data available
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="location" className="mt-6">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="w-6 h-6 text-primary" />
                      Location Leaderboard
                    </CardTitle>
                    <CardDescription>
                      Top players by country or region
                    </CardDescription>
                  </div>
                  <Select
                    value={selectedLocation?.toString()}
                    onValueChange={(value) => {
                      const locationId = parseInt(value);
                      setSelectedLocation(locationId);
                      loadLocationLeaderboard(locationId);
                    }}
                  >
                    <SelectTrigger className="w-[200px]">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location.id} value={location.id.toString()}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                {locationPlayers.length > 0 ? (
                  <div className="divide-y">
                    {locationPlayers.map((player, index) => (
                      <PlayerRow key={player.tag} player={player} index={index} />
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    {selectedLocation 
                      ? "Loading location data..." 
                      : "Select a location to view leaderboard"}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clans" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Top Clans Worldwide
                </CardTitle>
                <CardDescription>
                  The most successful clans by clan score
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                {loading ? (
                  <div className="p-8 text-center text-muted-foreground">Loading...</div>
                ) : (
                  <div className="divide-y">
                    {clans.map((clan, index) => (
                      <ClanRow key={clan.tag} clan={clan} index={index} />
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Leaderboards;