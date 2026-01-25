import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-mono text-sm text-muted-foreground">
          <span className="text-primary">{"<"}</span>
          HK
          <span className="text-primary">{" />"}</span>
          <span className="mx-2">•</span>
          © {new Date().getFullYear()}
        </p>
        
        
        <p className="font-mono text-xs text-muted-foreground">
          Harsh Kumar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
