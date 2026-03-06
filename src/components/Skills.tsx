import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Program Management",
    skills: [
      "Full SDLC Ownership",
      "Technical Roadmapping",
      "Dependency Management",
      "Risk Mitigation & Contingency Planning",
      "Resource Allocation",
      "Stakeholder Management",
      "Change Management",
    ],
  },
  {
    title: "Engineering & Architecture",
    skills: [
      "System Design",
      "Microservices",
      "API Design (REST)",
      "Frontend/Backend Integration",
      "CI/CD Pipelines",
      "Scalability & Performance Optimization",
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
      "VBA",
      "Process Engineering",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-24 bg-card" id="skills">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16"
        >
          Technical Skills
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
                    className="px-3 py-1.5 bg-background border border-border rounded-md text-sm text-foreground font-body"
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
