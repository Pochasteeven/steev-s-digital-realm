import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 animate-gradient" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in-up">
          {/* Profile Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Profile"
              className="relative w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-primary/50 shadow-2xl"
            />
          </div>

          {/* Name & Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black tracking-tight">
              <span className="gradient-text">STEEVWORLD</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Welcome to <span className="text-primary">My Space</span>, <span className="text-accent">My Journey</span>
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed">
            Digital Creator | Content Designer | Visual Storyteller
          </p>

          {/* CTA Button */}
          <Button
            onClick={scrollToAbout}
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 rounded-full neon-glow hover:scale-105 transition-all duration-300"
          >
            Explore My World
            <ArrowDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
