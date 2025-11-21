import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo/Brand */}
          <div className="text-xl font-heading font-bold neon-text">
            STEEVWORLD
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© 2025 STEEVWORLD – All Rights Reserved</span>
            <span>•</span>
            <span className="flex items-center gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            </span>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-muted-foreground">
            Designed & Built with Passion
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
