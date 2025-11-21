import { Camera, Video, Palette, ImageIcon, Pencil, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    {
      icon: Camera,
      name: "Photo Editing",
      description: "Professional photo retouching and enhancement",
      level: 95,
    },
    {
      icon: Video,
      name: "Video Editing",
      description: "Cinematic video production and post-processing",
      level: 90,
    },
    {
      icon: Palette,
      name: "Graphic Design",
      description: "Creative visual design and branding",
      level: 88,
    },
    {
      icon: ImageIcon,
      name: "Thumbnail Creation",
      description: "Eye-catching thumbnails for maximum impact",
      level: 92,
    },
    {
      icon: Pencil,
      name: "Poster Design",
      description: "Stunning promotional materials and artwork",
      level: 85,
    },
    {
      icon: Sparkles,
      name: "Creative Direction",
      description: "Conceptualizing and executing creative visions",
      level: 87,
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Expertise across the digital creative spectrum
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:neon-glow transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                      <skill.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold">{skill.name}</h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground">{skill.description}</p>

                  {/* Skill Level Bar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Proficiency</span>
                      <span className="font-semibold text-primary">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Skills;
