import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-container relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto text-center">
        <p className="font-mono text-primary mb-4">{"// Let's Connect"}</p>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          I'm currently open to new opportunities and collaborations. 
          Whether you have a project in mind or just want to say hello, 
          feel free to reach out!
        </p>

        <div className="glass rounded-2xl p-8 md:p-12 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="text-left space-y-6">
              <h3 className="font-mono text-xl font-bold mb-6">Contact Info</h3>
              
              <a
                href="mailto:hps4658@gmail.com"
                className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-300 group"
              >
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Email</p>
                  <p className="font-mono text-sm">hps4658@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30">
                <div className="p-3 rounded-lg bg-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Location</p>
                  <p className="font-mono text-sm">Pune, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-left">
              <h3 className="font-mono text-xl font-bold mb-6">Social Links</h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/hps0201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">LinkedIn</p>
                    <p className="font-mono text-sm">Let's connect professionally</p>
                  </div>
                </a>

                <a
                  href="https://github.com/happysingh222"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/30 hover:bg-primary/10 transition-all duration-300 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">GitHub</p>
                    <p className="font-mono text-sm">Check out my code</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="mailto:hps4658@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-gradient-primary text-primary-foreground font-mono font-medium transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 hover:scale-105"
        >
          <Send className="w-5 h-5" />
          Send Message
        </a>
      </div>
    </section>
  );
};

export default Contact;
