import { Briefcase, GraduationCap, Award } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <div className="text-center mb-16">
        <p className="font-mono text-primary mb-4">{"// Journey"}</p>
        <h2 className="text-4xl md:text-5xl font-bold">
          Experience & <span className="text-gradient">Education</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

          {/* Experience Item */}
          <div className="relative mb-12">
            <div className="flex items-center md:justify-center mb-4">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center z-10">
                <Briefcase className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16">
              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="font-mono text-xl font-bold">Senior Software Engineer</h3>
                    <p className="text-primary font-medium">Capgemini</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">July 2023 – Present</span>
                </div>
                <p className="text-muted-foreground text-sm mb-4">Pune, India</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Working on CLIENT Activity Monitoring and Protection System involving rule engine and backend components in Java and C
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Designed and maintained full-stack features for multi-university Learning Management System
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Built interactive, responsive UI components in React and Next.js
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    Automated manual workflows via tools for email scraping and mass email automation
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Achievement */}
          <div className="relative mb-12">
            <div className="flex items-center md:justify-center mb-4">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center z-10">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="ml-16 md:ml-auto md:w-1/2 md:pl-16">
              <div className="glass rounded-xl p-6 card-hover border-primary/30">
                <h3 className="font-mono text-lg font-bold text-primary mb-2">Key Achievements</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-accent">★</span>
                    Promoted to Senior Software Engineer within 1.5 years with exceptional rating
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">★</span>
                    Developed automation tools saving 5+ hours/week for the team
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="relative">
            <div className="flex items-center md:justify-center mb-4">
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center z-10">
                <GraduationCap className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>
            <div className="ml-16 md:ml-0 md:w-1/2 md:pr-16">
              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-4">
                  <div>
                    <h3 className="font-mono text-xl font-bold">B.E. in Information Technology</h3>
                    <p className="text-primary font-medium">Dr. D. Y. Patil Institute of Technology</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-mono">2019 – 2023</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30">
                  <span className="font-mono text-sm text-primary font-semibold">SGPA: 9.25/10.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
