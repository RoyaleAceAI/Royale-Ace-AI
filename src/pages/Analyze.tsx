import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useState, useRef } from "react";
import { Upload, User, ArrowRight, Video, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { AIAnalysisService } from "@/services/aiAnalysisService";

const Analyze = () => {
  const [supercellId, setSupercellId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<"id" | "video">("id");
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState<"idle" | "uploading" | "processing" | "complete">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSupercellIdSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supercellId.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Supercell ID",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Analysis Started",
        description: "Fetching your recent matches...",
      });
      navigate("/results");
    }, 2000);
  };

  const handleVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file size (500MB limit)
    const maxSize = 500 * 1024 * 1024; // 500MB in bytes
    if (file.size > maxSize) {
      toast({
        title: "File too large",
        description: "Please upload a video smaller than 500MB",
        variant: "destructive",
      });
      return;
    }

    // Validate file type
    const validTypes = ['video/mp4', 'video/quicktime', 'video/x-msvideo', 'video/webm'];
    if (!validTypes.includes(file.type)) {
      toast({
        title: "Invalid file type",
        description: "Please upload an MP4, MOV, AVI, or WebM video",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setUploadStatus("uploading");
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 300);

    try {
      // Simulate AI analysis
      toast({
        title: "Video uploaded successfully",
        description: "AI is now analyzing your gameplay...",
      });
      
      setUploadStatus("processing");
      setUploadProgress(95);

      // Call AI analysis service
      const analysis = await AIAnalysisService.analyzeVideo(file);
      
      setUploadProgress(100);
      setUploadStatus("complete");
      
      // Store analysis in sessionStorage for results page
      sessionStorage.setItem('analysis', JSON.stringify(analysis));
      
      toast({
        title: "Analysis Complete",
        description: `Found ${analysis.mistakes.length} areas for improvement`,
      });
      
      setTimeout(() => {
        navigate("/results");
      }, 1000);
      
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Analysis failed",
        description: "Please try again or contact support",
        variant: "destructive",
      });
      setUploadStatus("idle");
      setIsLoading(false);
      setUploadProgress(0);
    } finally {
      clearInterval(progressInterval);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Analyze Your Gameplay
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose how you want to upload your matches for AI analysis
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex gap-4 mb-8 justify-center">
            <Button
              variant={activeTab === "id" ? "default" : "outline"}
              onClick={() => setActiveTab("id")}
              className="flex items-center gap-2"
            >
              <User className="w-4 h-4" />
              Supercell ID
            </Button>
            <Button
              variant={activeTab === "video" ? "default" : "outline"}
              onClick={() => setActiveTab("video")}
              className="flex items-center gap-2"
            >
              <Video className="w-4 h-4" />
              Video Upload
            </Button>
          </div>

          {/* Content */}
          {activeTab === "id" ? (
            <Card className="p-8 bg-gradient-card border-primary/30">
              <form onSubmit={handleSupercellIdSubmit} className="space-y-6">
                <div className="text-center mb-6">
                  <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    Connect Your Account
                  </h2>
                  <p className="text-muted-foreground">
                    Enter your Supercell ID to analyze your recent matches
                  </p>
                </div>

                <div className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Enter your Supercell ID (e.g., #2PP0L9Q8)"
                    value={supercellId}
                    onChange={(e) => setSupercellId(e.target.value)}
                    className="text-center text-lg bg-background/50 border-primary/30 focus:border-primary"
                    disabled={isLoading}
                  />
                  
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg" 
                    className="w-full"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Analyzing...
                      </>
                    ) : (
                      <>
                        Analyze Matches
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="text-center text-sm text-muted-foreground">
                  <p>We'll analyze your last 10 matches</p>
                  <p>Average analysis time: 30 seconds</p>
                </div>
              </form>
            </Card>
          ) : (
            <Card className="p-8 bg-gradient-card border-primary/30">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-primary/10 mb-4">
                  <Upload className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Upload Gameplay Video
                </h2>
                <p className="text-muted-foreground mb-6">
                  Upload a recorded match for AI-powered frame-by-frame analysis
                </p>

                {uploadStatus === "idle" && (
                  <div className="border-2 border-dashed border-primary/30 rounded-xl p-8 hover:border-primary/50 transition-colors">
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/mp4,video/quicktime,video/x-msvideo,video/webm"
                      onChange={handleVideoUpload}
                      className="hidden"
                      id="video-upload"
                      disabled={isLoading}
                    />
                    <label 
                      htmlFor="video-upload" 
                      className="cursor-pointer"
                    >
                      <div className="flex flex-col items-center gap-4">
                        <Video className="w-12 h-12 text-primary" />
                        <div>
                          <p className="text-foreground font-medium mb-1">
                            Click to upload video or drag and drop
                          </p>
                          <p className="text-sm text-muted-foreground">
                            MP4, MOV, AVI, or WebM (Max 500MB)
                          </p>
                        </div>
                        <Button variant="hero" size="sm" type="button">
                          Choose File
                        </Button>
                      </div>
                    </label>
                  </div>
                )}

                {uploadStatus !== "idle" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center gap-3 mb-4">
                      {uploadStatus === "uploading" && (
                        <>
                          <Upload className="w-5 h-5 text-primary animate-pulse" />
                          <span className="text-foreground">Uploading video...</span>
                        </>
                      )}
                      {uploadStatus === "processing" && (
                        <>
                          <Loader2 className="w-5 h-5 text-primary animate-spin" />
                          <span className="text-foreground">AI is analyzing your gameplay...</span>
                        </>
                      )}
                      {uploadStatus === "complete" && (
                        <>
                          <CheckCircle className="w-5 h-5 text-success" />
                          <span className="text-success">Analysis complete!</span>
                        </>
                      )}
                    </div>
                    
                    <Progress value={uploadProgress} className="h-2" />
                    
                    <p className="text-sm text-muted-foreground">
                      {uploadStatus === "uploading" && `Uploading: ${uploadProgress}%`}
                      {uploadStatus === "processing" && "Identifying mistakes and opportunities..."}
                      {uploadStatus === "complete" && "Redirecting to results..."}
                    </p>
                  </div>
                )}

                <div className="mt-6 p-4 bg-primary/5 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-primary" />
                    AI Analysis Process
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• AI detects all troops, spells, and buildings frame-by-frame</li>
                    <li>• Analyzes elixir trades and placement decisions</li>
                    <li>• Compares your plays to optimal strategies from pro players</li>
                    <li>• Provides timestamped feedback for each mistake</li>
                  </ul>
                </div>
              </div>
            </Card>
          )}

          {/* Info cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-bold text-foreground mb-2">🎯 What We Analyze</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Elixir management efficiency</li>
                <li>• Card placement accuracy</li>
                <li>• Counter-play timing</li>
                <li>• Win condition usage</li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="font-bold text-foreground mb-2">📊 What You'll Get</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mistake identification with timestamps</li>
                <li>• Alternative play suggestions</li>
                <li>• Personalized improvement tips</li>
                <li>• Performance score breakdown</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analyze;