import { useState } from "react";
import { Play, X, Youtube } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  embedUrl: string;
  description?: string;
}

const videos: Video[] = [
  {
    id: "lZnAcCtuGE4",
    title: "Anvita Corporate Profile",
    thumbnail: "https://img.youtube.com/vi/lZnAcCtuGE4/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/lZnAcCtuGE4?enablejsapi=1",
    description: "Discover Anvita Group's vision and mission"
  },
  {
    id: "eXRppdEf5pc", 
    title: "Anvita Ivana",
    thumbnail: "https://img.youtube.com/vi/eXRppdEf5pc/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/eXRppdEf5pc?enablejsapi=1",
    description: "Explore our latest development projects"
  },
  {
    id: "DDx16jiwZI0",
    title: "High9 by Anvita", 
    thumbnail: "https://img.youtube.com/vi/DDx16jiwZI0/maxresdefault.jpg",
    embedUrl: "https://www.youtube.com/embed/DDx16jiwZI0?enablejsapi=1",
    description: "See our construction and development process"
  },
  {
    id: "nFoCEj9fPXo",
    title: "Parkside by Anvita",
    thumbnail: "https://img.youtube.com/vi/nFoCEj9fPXo/maxresdefault.jpg", 
    embedUrl: "https://www.youtube.com/embed/nFoCEj9fPXo?enablejsapi=1",
    description: "Browse through our complete portfolio"
  }
];

const VideoBubbles = () => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
  };

  const closeDialog = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-4">
            Video Gallery
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our projects and company showcase through these engaging videos
          </p>
        </div>

        {/* Video Bubbles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <div
              key={video.id}
              className={`relative group cursor-pointer animate-fade-in`}
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => handleVideoClick(video)}
            >
              {/* Bubble Container */}
              <div className="relative">
                {/* Floating Animation */}
                <div className={`
                  relative rounded-full overflow-hidden 
                  bg-gradient-to-br from-white/80 to-gray-100/80 
                  backdrop-blur-sm border border-white/20
                  shadow-lg hover:shadow-2xl
                  transition-all duration-500 ease-out
                  group-hover:scale-105 group-hover:-translate-y-2
                  w-48 h-48 mx-auto
                  ${index % 2 === 0 ? 'animate-pulse' : ''}
                `}>
                  {/* Video Thumbnail */}
                  <div className="absolute inset-4 rounded-full overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="
                        w-12 h-12 rounded-full bg-white/90 
                        flex items-center justify-center
                        transition-all duration-300
                        group-hover:w-16 group-hover:h-16
                        group-hover:bg-primary group-hover:text-white
                      ">
                        <Play className="w-5 h-5 ml-1 transition-all duration-300 group-hover:w-7 group-hover:h-7" />
                      </div>
                    </div>
                  </div>

                  {/* YouTube Icon */}
                  <div className="absolute top-2 right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <Youtube className="w-4 h-4 text-white" />
                  </div>

                  {/* Floating effect dots */}
                  <div className="absolute -top-2 -right-2 w-3 h-3 bg-primary rounded-full animate-ping opacity-20"></div>
                  <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>

                {/* Title */}
                <div className="text-center mt-4">
                  <h3 className="font-semibold text-primary text-sm mb-1 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Dialog */}
        <Dialog open={!!selectedVideo} onOpenChange={closeDialog}>
          <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0">
            <div className="relative bg-black rounded-lg overflow-hidden">
              <DialogHeader className="absolute top-4 right-4 z-10">
                <button
                  onClick={closeDialog}
                  className="w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </DialogHeader>
              
              {selectedVideo && (
                <div>
                  <AspectRatio ratio={16 / 9}>
                    <iframe
                      src={selectedVideo.embedUrl}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </AspectRatio>
                  
                  <div className="p-6 bg-gradient-to-r from-gray-900 to-black text-white">
                    <DialogTitle className="text-xl font-bold mb-2">
                      {selectedVideo.title}
                    </DialogTitle>
                    <p className="text-gray-300">
                      {selectedVideo.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default VideoBubbles;