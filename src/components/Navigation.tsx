import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass py-4" : "py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-mono text-xl font-bold text-gradient">
          {"<HK />"}
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link font-mono text-sm">
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-mono text-sm font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
          >
            Say Hello
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass mt-4 mx-4 rounded-lg p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-mono text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground font-mono text-sm font-medium text-center"
            >
              Say Hello
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
