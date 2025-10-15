import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { 
  PlayCircle, 
  Clock,
  User,
  TrendingUp,
  Filter,
  Video,
  Sparkles,
  CheckCircle2,
  BookmarkPlus,
  X
} from "lucide-react";
import { proVideos, getAllProPlayers, type ProVideo } from "@/data/videoData";
import { useToast } from "@/hooks/use-toast";

const Puzzles = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  const [selectedProPlayer, setSelectedProPlayer] = useState<string | null>(null);
  const [watchedVideos, setWatchedVideos] = useState<string[]>([]);
  const [savedVideos, setSavedVideos] = useState<string[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<ProVideo | null>(null);
  const { toast } = useToast();

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case "beginner": return "bg-green-500/20 text-green-400 border-green-500/30";
      case "intermediate": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "advanced": return "bg-red-500/20 text-red-400 border-red-500/30";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  const filteredVideos = proVideos.filter(video => {
    if (selectedDifficulty && video.difficulty !== selectedDifficulty) return false;
    if (selectedProPlayer && video.proPlayer !== selectedProPlayer) return false;
    return true;
  });

  const toggleWatched = (videoId: string) => {
    setWatchedVideos(prev => 
      prev.includes(videoId) 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
  };

  const toggleSaved = (videoId: string) => {
    const isSaved = savedVideos.includes(videoId);
    setSavedVideos(prev => 
      isSaved 
        ? prev.filter(id => id !== videoId)
        : [...prev, videoId]
    );
    
    toast({
      title: isSaved ? "Removed from saved" : "Saved for later",
      description: isSaved ? "Video removed from your list" : "Added to your watch later list",
    });
  };

  const stats = {
    watched: watchedVideos.length,
    saved: savedVideos.length,
    total: proVideos.length,
    completion: Math.round((watchedVideos.length / proVideos.length) * 100)
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Pro Player Analysis
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Learn from the best Clash Royale players in the world
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <Video className="w-8 h-8 text-primary" />
                <Sparkles className="w-6 h-6 text-accent animate-pulse" />
              </div>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <Video className="w-5 h-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Total Videos</p>
                    <p className="text-2xl font-bold text-foreground">{stats.total}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-success" />
                  <div>
                    <p className="text-sm text-muted-foreground">Watched</p>
                    <p className="text-2xl font-bold text-foreground">{stats.watched}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <BookmarkPlus className="w-5 h-5 text-accent" />
                  <div>
                    <p className="text-sm text-muted-foreground">Saved</p>
                    <p className="text-2xl font-bold text-foreground">{stats.saved}</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 bg-card/50 border-border">
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-secondary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Progress</p>
                    <p className="text-2xl font-bold text-foreground">{stats.completion}%</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Filters */}
            <div className="space-y-4">
              <div className="flex gap-3 items-center flex-wrap">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <Filter className="w-4 h-4" />
                  Difficulty:
                </span>
                <Button
                  variant={selectedDifficulty === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(null)}
                >
                  All
                </Button>
                <Button
                  variant={selectedDifficulty === "beginner" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty("beginner")}
                  className={selectedDifficulty === "beginner" ? "bg-green-600 hover:bg-green-700" : ""}
                >
                  Beginner
                </Button>
                <Button
                  variant={selectedDifficulty === "intermediate" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty("intermediate")}
                  className={selectedDifficulty === "intermediate" ? "bg-yellow-600 hover:bg-yellow-700" : ""}
                >
                  Intermediate
                </Button>
                <Button
                  variant={selectedDifficulty === "advanced" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty("advanced")}
                  className={selectedDifficulty === "advanced" ? "bg-red-600 hover:bg-red-700" : ""}
                >
                  Advanced
                </Button>
              </div>

              <div className="flex gap-3 items-center flex-wrap">
                <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                  <User className="w-4 h-4" />
                  Pro Player:
                </span>
                <Button
                  variant={selectedProPlayer === null ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedProPlayer(null)}
                >
                  All Players
                </Button>
                {getAllProPlayers().map(player => (
                  <Button
                    key={player}
                    variant={selectedProPlayer === player ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedProPlayer(player)}
                  >
                    {player}
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <Card 
                key={video.id} 
                className="bg-card/50 border-border overflow-hidden hover:border-primary/50 transition-all cursor-pointer group"
                onClick={() => setSelectedVideo(video)}
              >
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  {watchedVideos.includes(video.id) && (
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-success text-white">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Watched
                      </Badge>
                    </div>
                  )}
                  <div className="absolute bottom-2 right-2">
                    <Badge variant="secondary" className="bg-black/70 text-white">
                      <Clock className="w-3 h-3 mr-1" />
                      {video.duration}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className={`${getDifficultyColor(video.difficulty)} border`}>
                      {video.difficulty}
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSaved(video.id);
                      }}
                    >
                      <BookmarkPlus 
                        className={`w-4 h-4 ${savedVideos.includes(video.id) ? 'fill-accent text-accent' : ''}`}
                      />
                    </Button>
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-1 line-clamp-2">
                    {video.title}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{video.proPlayer}</span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {video.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {video.concepts.slice(0, 3).map((concept, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {concept}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWatched(video.id);
                    }}
                  >
                    {watchedVideos.includes(video.id) ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Mark as Unwatched
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Mark as Watched
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <Card className="p-12 text-center bg-card/50 border-border">
              <Video className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">
                No videos found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your filters to see more videos
              </p>
            </Card>
          )}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div 
            className="bg-background rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">{selectedVideo.title}</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedVideo(null)}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            <div className="p-6 space-y-6">
              {/* Video Player */}
              <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}`}
                  title={selectedVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Video Info */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <Badge className={`${getDifficultyColor(selectedVideo.difficulty)} border`}>
                    {selectedVideo.difficulty}
                  </Badge>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{selectedVideo.proPlayer}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{selectedVideo.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{selectedVideo.description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-foreground mb-2">Key Concepts:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVideo.concepts.map((concept, idx) => (
                      <Badge key={idx} variant="outline">
                        {concept}
                      </Badge>
                    ))}
                  </div>
                </div>

                {selectedVideo.keyMoments && selectedVideo.keyMoments.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-foreground mb-3">Key Moments:</h3>
                    <div className="space-y-2">
                      {selectedVideo.keyMoments.map((moment, idx) => (
                        <div key={idx} className="flex gap-3 p-3 bg-card/50 rounded-lg border border-border">
                          <Badge variant="secondary" className="shrink-0">
                            {moment.time}
                          </Badge>
                          <p className="text-sm text-muted-foreground">{moment.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button
                  variant="default"
                  className="flex-1"
                  onClick={() => toggleWatched(selectedVideo.id)}
                >
                  {watchedVideos.includes(selectedVideo.id) ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Mark as Unwatched
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 mr-2" />
                      Mark as Watched
                    </>
                  )}
                </Button>
                <Button
                  variant="outline"
                  onClick={() => toggleSaved(selectedVideo.id)}
                >
                  <BookmarkPlus className={`w-4 h-4 ${savedVideos.includes(selectedVideo.id) ? 'fill-accent text-accent' : ''}`} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Puzzles;
