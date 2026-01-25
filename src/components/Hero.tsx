import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Senior Software Engineer";
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 80);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative z-10 text-center px-6">
        
        <p className="font-mono text-primary mb-4 animate-fade-in" style={{ animationDelay: "0.2s", opacity: 0 }}>
          Hello, I'm
        </p>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.4s", opacity: 0 }}>
          <span className="text-gradient">Harsh Kumar</span>
        </h1>
        
        <div className="h-12 mb-8">
          <p className="font-mono text-xl md:text-2xl text-muted-foreground">
            <span className="text-primary">{">"}</span>
            {displayText}
            <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
          </p>
        </div>
        
        <p className="max-w-xl mx-auto text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "0.8s", opacity: 0 }}>
          Building enterprise-grade applications with Java, Spring Boot, React & Cloud technologies. 
          2.6+ years crafting scalable solutions.
        </p>
        
        {/* Social links */}
        <div className="flex items-center justify-center gap-6 mb-16 animate-fade-in" style={{ animationDelay: "1s", opacity: 0 }}>
          <a
            href="https://github.com/happysingh222"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/hps0201/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a
            href="mailto:hps4658@gmail.com"
            className="p-3 rounded-full glass hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
        
        {/* Scroll indicator */}
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-fade-in"
          style={{ animationDelay: "1.2s", opacity: 0 }}
        >
          <span className="font-mono text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
