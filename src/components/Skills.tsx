const skills = {
  "Languages": ["Java", "C++", "Python", "JavaScript", "TypeScript"],
  "Frontend": ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  "Backend & Frameworks": ["Spring Boot", "Spring MVC", "REST APIs", "Microservices"],
  "Databases": ["MySQL", "PostgreSQL"],
  "Cloud & DevOps": ["AWS", "Azure", "Docker", "Git"],
  "Tools": ["Jira", "Postman", "VS Code", "IntelliJ IDEA"],
};

const Skills = () => {
  return (
    <section id="skills" className="section-container relative">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative">
        <div className="text-center mb-16">
          <p className="font-mono text-primary mb-4">{"// Tech Stack"}</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, items], index) => (
            <div
              key={category}
              className="glass rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="font-mono text-primary font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-16">
          <h3 className="font-mono text-primary text-center mb-8">{"// Certifications"}</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "AWS Cloud Practitioner",
              "Azure Fundamentals",
              "Azure AI Fundamentals",
            ].map((cert) => (
              <div
                key={cert}
                className="glass rounded-full px-6 py-3 font-mono text-sm text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
