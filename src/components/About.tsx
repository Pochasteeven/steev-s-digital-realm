import { GraduationCap, Target, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const aboutSections = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "Currently pursuing my passion in digital media and creative design. Always learning, always growing.",
    },
    {
      icon: Heart,
      title: "Interests & Hobbies",
      content: "Photo editing, video production, graphic design, thumbnail creation, and exploring the latest in digital creativity.",
    },
    {
      icon: Target,
      title: "Life Goals",
      content: "To build a creative empire, inspire others through my work, and make a lasting impact in the digital world.",
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the creativity
            </p>
          </div>

          {/* Bio */}
          <Card className="p-8 md:p-12 mb-12 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 animate-fade-in-up">
            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Hello! I'm a passionate digital creator and visual storyteller with a deep love for all things creative. 
              My journey in the digital world started with a simple camera and an idea, and it has evolved into a 
              full-fledged creative pursuit spanning photo editing, video production, graphic design, and content creation.
            </p>
            <p className="text-lg leading-relaxed text-foreground/90">
              I believe in the power of visual storytelling to connect, inspire, and make a difference. Every project 
              I undertake is an opportunity to push boundaries, learn something new, and create something meaningful. 
              Welcome to my world – let's create something amazing together!
            </p>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {aboutSections.map((section, index) => (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 hover:neon-glow transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <section.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-heading font-bold">{section.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default About;
