import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Trophy, Shield, Swords, Crown, Users, Activity, TrendingUp, Award, Star } from "lucide-react";
import { clashRoyaleApi, type Player } from "@/services/clashRoyaleApi";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const PlayerStats = () => {
  const [searchTag, setSearchTag] = useState("");
  const [player, setPlayer] = useState<Player | null>(null);
  const [loading, setLoading] = useState(false);
  const [battleLog, setBattleLog] = useState<any[]>([]);
  const [upcomingChests, setUpcomingChests] = useState<any[]>([]);
  const [apiKeyInput, setApiKeyInput] = useState<string>(typeof window !== 'undefined' ? (localStorage.getItem('CR_API_KEY') || '') : '');
  const [aiCoaching, setAiCoaching] = useState("");
  const [loadingCoach, setLoadingCoach] = useState(false);
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
  const searchPlayer = async () => {
    if (!searchTag) {
      toast({
        title: "Error",
        description: "Please enter a player tag",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const playerData = await clashRoyaleApi.getPlayer(searchTag);
      setPlayer(playerData);
      
      // Fetch additional data
      const [battles, chests] = await Promise.all([
        clashRoyaleApi.getPlayerBattleLog(searchTag).catch(() => []),
        clashRoyaleApi.getPlayerUpcomingChests(searchTag).catch(() => [])
      ]);
      
      setBattleLog(battles);
      setUpcomingChests(chests?.items || []);
      
      toast({
        title: "Success",
        description: `Found player: ${playerData.name}`,
      });

      // Get AI coaching
      getAiCoaching(playerData, battles);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Failed to find player",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const calculateWinRate = () => {
    if (!player || player.battleCount === 0) return 0;
    return ((player.wins / player.battleCount) * 100).toFixed(1);
  };

  const calculateThreeCrownRate = () => {
    if (!player || player.wins === 0) return 0;
    return ((player.threeCrownWins / player.wins) * 100).toFixed(1);
  };

  const getAiCoaching = async (playerData: Player, battles: any[]) => {
    setLoadingCoach(true);
    try {
      const { data: coachingData, error: coachError } = await supabase.functions.invoke('ai-coach', {
        body: { 
          playerData,
          replayData: battles.slice(0, 5)
        }
      });

      if (coachError) throw coachError;
      
      setAiCoaching(coachingData.coaching);
      toast({
        title: "AI Coach Ready",
        description: "Personalized coaching advice generated!",
      });
    } catch (err: any) {
      console.error('AI coaching error:', err);
      toast({
        title: "Coaching Unavailable",
        description: "Could not generate AI coaching at this time.",
        variant: "destructive",
      });
    } finally {
      setLoadingCoach(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {/* Search Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Player Stats
          </h1>
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="flex gap-2">
              <Input
                placeholder="Enter Clash Royale API key (stored locally)"
                value={apiKeyInput}
                onChange={(e) => setApiKeyInput(e.target.value)}
              />
              <Button variant="secondary" onClick={saveApiKey}>Save Key</Button>
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Enter player tag (e.g., #2PP)"
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && searchPlayer()}
                className="flex-1"
              />
              <Button onClick={searchPlayer} disabled={loading} variant="glow">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        {/* Player Info */}
        {player && (
          <div className="space-y-6">
            {/* Header Card */}
            <Card className="border-primary/20 shadow-glow">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl flex items-center gap-3">
                      {player.name}
                      <Badge variant="secondary">Level {player.expLevel}</Badge>
                    </CardTitle>
                    <CardDescription className="text-lg mt-2">
                      {player.tag} • {player.arena.name}
                    </CardDescription>
                    {player.clan && (
                      <div className="flex items-center gap-2 mt-2">
                        <Users className="w-4 h-4 text-muted-foreground" />
                        <span className="text-muted-foreground">{player.clan.name}</span>
                        {player.role && <Badge variant="outline">{player.role}</Badge>}
                      </div>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                      <Trophy className="w-8 h-8" />
                      {player.trophies}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Best: {player.bestTrophies}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Stats Tabs */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="ai-coach">AI Coach</TabsTrigger>
                <TabsTrigger value="battles">Battles</TabsTrigger>
                <TabsTrigger value="cards">Cards</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Activity className="w-4 h-4" />
                        Win Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{calculateWinRate()}%</div>
                      <Progress value={parseFloat(calculateWinRate() || "0")} className="mt-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {player.wins}W / {player.losses}L
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Crown className="w-4 h-4" />
                        Three Crown Rate
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold text-primary">{calculateThreeCrownRate()}%</div>
                      <Progress value={parseFloat(calculateThreeCrownRate() || "0")} className="mt-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {player.threeCrownWins} three crowns
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Swords className="w-4 h-4" />
                        Total Battles
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{player.battleCount}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Tournament: {player.tournamentBattleCount}
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Challenge Max Wins
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{player.challengeMaxWins}</div>
                      <p className="text-xs text-muted-foreground mt-1">
                        Cards won: {player.challengeCardsWon}
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Upcoming Chests */}
                {upcomingChests.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Upcoming Chests</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2 overflow-x-auto pb-2">
                        {upcomingChests.map((chest: any, index: number) => (
                          <div key={index} className="flex-shrink-0 text-center">
                            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-1">
                              <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-xs">+{chest.index}</p>
                            <p className="text-xs font-medium">{chest.name.replace('Chest', '')}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                {/* Path of Legends */}
                {player.pathOfLegendSeasonResult && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <TrendingUp className="w-5 h-5" />
                        Path of Legends
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <p className="text-2xl font-bold text-primary">
                            {player.pathOfLegendSeasonResult.leagueNumber}
                          </p>
                          <p className="text-sm text-muted-foreground">League</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">
                            {player.pathOfLegendSeasonResult.trophies}
                          </p>
                          <p className="text-sm text-muted-foreground">Trophies</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold">
                            #{player.pathOfLegendSeasonResult.rank}
                          </p>
                          <p className="text-sm text-muted-foreground">Rank</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="ai-coach" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      AI Coach Analysis
                    </CardTitle>
                    <CardDescription>
                      Personalized gameplay insights powered by Gemini AI
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {loadingCoach ? (
                      <div className="flex flex-col items-center justify-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
                        <p className="text-muted-foreground">Analyzing your gameplay...</p>
                      </div>
                    ) : aiCoaching ? (
                      <div className="prose prose-sm max-w-none dark:prose-invert">
                        <div className="whitespace-pre-wrap text-foreground">{aiCoaching}</div>
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-muted-foreground mb-2">AI coaching will appear here after searching for a player.</p>
                        <p className="text-sm text-muted-foreground">Get personalized tips to improve your gameplay!</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="battles" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Battles</CardTitle>
                    <CardDescription>Your last matches and performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {battleLog.length > 0 ? (
                      <div className="space-y-2">
                        {battleLog.slice(0, 10).map((battle: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-3">
                              <div className={`w-2 h-2 rounded-full ${
                                battle.team[0].crowns > (battle.opponent[0]?.crowns || 0) 
                                  ? 'bg-green-500' 
                                  : battle.team[0].crowns < (battle.opponent[0]?.crowns || 0)
                                  ? 'bg-red-500'
                                  : 'bg-yellow-500'
                              }`} />
                              <div>
                                <p className="font-medium">{battle.type.replace(/_/g, ' ')}</p>
                                <p className="text-sm text-muted-foreground">{battle.battleTime}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-bold">
                                {battle.team[0].crowns} - {battle.opponent[0]?.crowns || 0}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No recent battles available</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="cards" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Current Deck</CardTitle>
                    <CardDescription>Cards in your active deck</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {player.currentDeck && player.currentDeck.length > 0 ? (
                      <div className="grid grid-cols-4 gap-3">
                        {player.currentDeck.map((card) => (
                          <div key={card.id} className="text-center">
                            <div className="w-20 h-24 rounded-lg bg-muted flex items-center justify-center mx-auto mb-1">
                              <Star className="w-8 h-8 text-primary" />
                            </div>
                            <p className="text-xs font-medium">{card.name}</p>
                            <p className="text-xs text-muted-foreground">Lvl {card.level}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No deck information available</p>
                    )}
                  </CardContent>
                </Card>

                {player.currentFavouriteCard && (
                  <Card>
                    <CardHeader>
                      <CardTitle>Favorite Card</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-24 rounded-lg bg-gradient-primary p-1">
                          <div className="w-full h-full rounded-md bg-background flex items-center justify-center">
                            <Star className="w-8 h-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-lg font-bold">{player.currentFavouriteCard.name}</p>
                          <p className="text-sm text-muted-foreground">Most used card</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </TabsContent>

              <TabsContent value="achievements" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Achievements & Badges</CardTitle>
                    <CardDescription>Your accomplishments and progress</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {player.badges && player.badges.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {player.badges.slice(0, 10).map((badge, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                            <Award className="w-8 h-8 text-primary" />
                            <div className="flex-1">
                              <p className="font-medium">{badge.name}</p>
                              {badge.progress !== undefined && badge.target && (
                                <div className="mt-1">
                                  <Progress 
                                    value={(badge.progress / badge.target) * 100} 
                                    className="h-1"
                                  />
                                  <p className="text-xs text-muted-foreground mt-1">
                                    {badge.progress} / {badge.target}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">No badges available</p>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </main>
    </div>
  );
};

export default PlayerStats;