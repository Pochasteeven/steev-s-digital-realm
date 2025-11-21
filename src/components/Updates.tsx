import { Bell, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Updates = () => {
  const updates = [
    {
      date: "2025-01-15",
      title: "New Video Project in Progress",
      description: "Working on an exciting new cinematic video project. Stay tuned for the premiere!",
      badge: "In Progress",
      badgeVariant: "default" as const,
    },
    {
      date: "2025-01-10",
      title: "Photo Editing Portfolio Updated",
      description: "Added 15 new professionally edited photos to my portfolio. Check them out on Instagram!",
      badge: "New",
      badgeVariant: "secondary" as const,
    },
    {
      date: "2025-01-05",
      title: "Collaboration Announcement",
      description: "Excited to announce a collaboration with local creators. Big things coming soon!",
      badge: "Announcement",
      badgeVariant: "outline" as const,
    },
    {
      date: "2024-12-28",
      title: "Year-End Creative Showcase",
      description: "Published my best work of 2024. Thank you all for the amazing support this year!",
      badge: "Completed",
      badgeVariant: "outline" as const,
    },
  ];

  return (
    <section id="updates" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 mb-4">
              <Bell className="h-8 w-8 text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
                Latest <span className="gradient-text">Updates</span>
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay updated with my latest projects and activities
            </p>
          </div>

          {/* Updates List */}
          <div className="space-y-6">
            {updates.map((update, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:neon-glow transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <Badge variant={update.badgeVariant} className="font-semibold">
                          {update.badge}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(update.date).toLocaleDateString('en-US', { 
                            month: 'long', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                        {update.title}
                      </h3>
                    </div>
                    <TrendingUp className="h-5 w-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed">
                    {update.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
              <p className="text-lg font-medium mb-4">
                Want to stay updated? Follow me on social media!
              </p>
              <p className="text-muted-foreground">
                Get notified about new projects, collaborations, and creative updates.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Updates;
