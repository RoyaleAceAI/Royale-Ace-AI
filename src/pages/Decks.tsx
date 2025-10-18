import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, TrendingUp, Flame, Target, Zap, Crown, Layers } from "lucide-react";
import { popularMetaDecks, type MetaDeck } from "@/data/metaDecks";

const Decks = () => {
  const [metaDecks] = useState<MetaDeck[]>(popularMetaDecks);

  const getArchetypeIcon = (archetype: string) => {
    const icons: Record<string, any> = {
      'Beatdown': Crown,
      'Siege': Target,
      'Cycle': Zap,
      'Control': Trophy,
      'Bridge Spam': Flame,
      'Bait': TrendingUp,
      'Graveyard': Layers
    };

    const Icon = icons[archetype] || Trophy;
    return <Icon className="w-5 h-5" />;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors: Record<string, string> = {
      'Easy': 'bg-green-500/10 text-green-500 border-green-500/20',
      'Medium': 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      'Hard': 'bg-red-500/10 text-red-500 border-red-500/20'
    };

    return colors[difficulty] || colors['Medium'];
  };

  const getCardImage = (cardName: string) => {
    const cardSlug = cardName.toLowerCase().replace(/ /g, '-');
    return `https://api-assets.clashroyale.com/cards/300/${cardSlug}.png`;
  };

  const DeckCardComponent = ({ deck }: { deck: MetaDeck }) => (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            {getArchetypeIcon(deck.archetype)}
            <CardTitle className="text-xl">{deck.name}</CardTitle>
          </div>
          <Badge variant="outline" className={getDifficultyColor(deck.difficulty)}>
            {deck.difficulty}
          </Badge>
        </div>
        <CardDescription>{deck.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {deck.cards.map((cardName, idx) => (
            <div key={idx} className="relative aspect-square rounded-lg overflow-hidden bg-muted border border-border">
              <img
                src={getCardImage(cardName)}
                alt={cardName}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://api-assets.clashroyale.com/cards/300/knight.png';
                }}
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-primary">{deck.usageRate}%</p>
            <p className="text-xs text-muted-foreground">Usage Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{deck.winRate}%</p>
            <p className="text-xs text-muted-foreground">Win Rate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-primary">{deck.averageElixir}</p>
            <p className="text-xs text-muted-foreground">Avg Elixir</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  const filterDecksByArchetype = (archetype?: string) => {
    if (!archetype) return metaDecks;
    return metaDecks.filter(deck => deck.archetype === archetype);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Top Meta Decks
          </h1>
          <p className="text-muted-foreground">
            Discover the most popular and successful decks in the current meta
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="beatdown">Beatdown</TabsTrigger>
            <TabsTrigger value="cycle">Cycle</TabsTrigger>
            <TabsTrigger value="control">Control</TabsTrigger>
            <TabsTrigger value="siege">Siege</TabsTrigger>
            <TabsTrigger value="bridge">Bridge Spam</TabsTrigger>
            <TabsTrigger value="bait">Bait</TabsTrigger>
            <TabsTrigger value="graveyard">Graveyard</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metaDecks.map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="beatdown" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Beatdown').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="cycle" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Cycle').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="control" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Control').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="siege" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Siege').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bridge" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Bridge Spam').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bait" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Bait').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="graveyard" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filterDecksByArchetype('Graveyard').map((deck, idx) => (
                <DeckCardComponent key={idx} deck={deck} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Decks;
