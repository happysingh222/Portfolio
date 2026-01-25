import { ExternalLink,  Layers } from "lucide-react";

const projects = [
  {
    title: "Learning Management System",
    subtitle: "Capgemini Client Project",
    description:
      "A modern Learning Management System used by major Canadian universities to streamline digital learning workflows. Built and enhanced interactive front-end modules using React, JavaScript, and Next.js, improving UX and system responsiveness.",
    technologies: ["React", "Next.js", "JavaScript", "TypeScript"],
    type: "Enterprise",
  },
  {
    title: "Activity Monitoring System",
    subtitle: "Rule Engine & Backend",
    description:
      "Client Activity Monitoring and Protection System involving rule engine and backend components coded in Java and C for anomaly detection. Designed to monitor and protect client activities in real-time.",
    technologies: ["Java", "C", "Rule Engine", "Backend APIs"],
    type: "Security",
  },
  {
    title: "Automation Tools Suite",
    subtitle: "Internal Productivity",
    description:
      "Developed automation tools for email scraping and mass email automation, saving 5+ hours per week for the team. Streamlined manual workflows and improved team productivity significantly.",
    technologies: ["Python", "Automation", "Email APIs"],
    type: "Productivity",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-4">{"// Work"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass rounded-xl overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Layers className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/30">
                    {project.type}
                  </span>
                </div>
                <h3 className="font-mono text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-primary text-sm">{project.subtitle}</p>
              </div>

              {/* Project body */}
              <div className="p-6">
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary/50 text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            More projects coming soon. Working on personal projects to showcase on GitHub.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
