import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Program Management",
    skills: [
      "Full SDLC Ownership",
      "AI/ML Pipeline Delivery",
      "Technical Roadmapping",
      "Dependency Management",
      "Risk Mitigation & Contingency Planning",
      "Contractor & Vendor SOW Management",
      "Stakeholder Management",
      "Change Management",
    ],
  },
  {
    title: "Engineering & Architecture",
    skills: [
      "System Design",
      "API Design (REST)",
      "Frontend/Backend Integration",
      "CI/CD Pipelines",
      "Architectural Decision Records (ADR)",
      "Full-Stack Development",
    ],
  },
  {
    title: "Methodologies & Frameworks",
    skills: [
      "Agile",
      "Scrum",
      "Kanban",
      "Sprint Planning",
      "Root Cause Analysis (RCA)",
      "Technical Requirement Document (TRD) Authoring",
    ],
  },
  {
    title: "Tools & Infrastructure",
    skills: [
      "Jira",
      "Confluence",
      "AWS (Amplify/S3)",
      "Git (Branching/Rebasing)",
      "Postman",
      "Playwright",
      "Vercel",
      "MySQL/PostgreSQL",
    ],
  },
  {
    title: "Data & Analytics",
    skills: [
      "Regression Modeling",
      "Data Visualization",
      "Business Intelligence (BI)",
      "SQL",
      "Process Engineering",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16 relative inline-block after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-accent after:rounded-full after:-mb-2"
        >
          Core Competencies
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-background border border-border/40 rounded-md text-sm text-foreground font-body transition-all duration-150 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-sm cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
