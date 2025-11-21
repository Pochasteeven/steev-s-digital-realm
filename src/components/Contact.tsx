import { Mail, Instagram, Youtube, Facebook, Send, MessageCircle, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/steevworld",
      color: "hover:text-pink-500",
    },
    {
      name: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@steevworld",
      color: "hover:text-red-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://wa.me/1234567890",
      color: "hover:text-green-500",
    },
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/steevworld",
      color: "hover:text-blue-500",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/steevworld",
      color: "hover:text-sky-500",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all fields");
      return;
    }

    // Here you would typically send the form data to a backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's connect and create something amazing together
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="text-2xl font-heading font-bold">Send a Message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-background/50"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hi..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-background/50 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-6 neon-glow"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>

            {/* Social Links */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex items-center gap-3 mb-6">
                  <Phone className="h-6 w-6 text-primary" />
                  <h3 className="text-2xl font-heading font-bold">Connect on Social Media</h3>
                </div>
                
                <p className="text-muted-foreground mb-8">
                  Follow me on social media for daily updates, behind-the-scenes content, and more!
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group"
                    >
                      <Card className="p-6 bg-background/50 border-border/50 hover:border-primary/50 transition-all duration-300 hover:neon-glow">
                        <div className="flex flex-col items-center gap-3 text-center">
                          <link.icon className={`h-8 w-8 text-foreground/70 group-hover:scale-110 transition-all ${link.color}`} />
                          <span className="text-sm font-medium">{link.name}</span>
                        </div>
                      </Card>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Quick Info */}
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
                <h4 className="text-xl font-heading font-bold mb-4">Quick Response</h4>
                <p className="text-foreground/80 leading-relaxed">
                  I typically respond to messages within 24-48 hours. For urgent inquiries, 
                  feel free to reach out on WhatsApp or Telegram for faster communication.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
