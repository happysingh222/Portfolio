import { Code2, Server, Cloud } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Building end-to-end solutions with React, Next.js, and modern JavaScript frameworks",
    },
    {
      icon: Server,
      title: "Backend Architecture",
      description: "Designing robust microservices with Spring Boot, REST APIs, and database integration",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Deploying and scaling applications on AWS and Azure with Docker containerization",
    },
  ];

  return (
    <section id="about" className="section-container">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-primary mb-4">{"// About Me"}</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Crafting <span className="text-gradient">Digital Experiences</span>
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Software Engineer at Capgemini with a passion for building 
              enterprise applications that make a difference. With 2.6 years of experience, 
              I specialize in creating scalable, efficient, and user-friendly solutions.
            </p>
            <p>
              My journey spans from developing activity monitoring systems with rule engines 
              to building Learning Management Systems used by major Canadian universities. 
              I thrive on solving complex problems and delivering features that users love.
            </p>
            <p>
              Beyond coding, I'm AWS Cloud Practitioner and Azure certified, 
              constantly expanding my expertise in cloud technologies and modern 
              development practices.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <div className="glass rounded-lg px-5 py-3">
              <p className="font-mono text-2xl font-bold text-gradient">2.6+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </div>
            <div className="glass rounded-lg px-5 py-3">
              <p className="font-mono text-2xl font-bold text-gradient">3+</p>
              <p className="text-sm text-muted-foreground">Certifications</p>
            </div>
            <div className="glass rounded-lg px-5 py-3">
              <p className="font-mono text-2xl font-bold text-gradient">5+</p>
              <p className="text-sm text-muted-foreground">Hours Saved/Week</p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass rounded-xl p-6 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-mono font-semibold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
