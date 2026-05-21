import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const categoryVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE },
  },
};

const tagContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const tagVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.25, ease: EASE },
  },
};

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary relative inline-block">
            Core Competencies
          </h2>
          <motion.div
            className="w-0 h-0.5 bg-accent rounded-full mt-2"
            whileInView={{ width: "2rem" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Stagger parent for category cards */}
        <motion.div
          className="grid md:grid-cols-2 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={categoryVariants}
            >
              <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-muted-foreground mb-4">
                {category.title}
              </h3>

              {/* Stagger tags */}
              <motion.div
                className="flex flex-wrap gap-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={tagContainerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={tagVariants}
                    className="px-3 py-1.5 bg-background border border-border/40 rounded-md text-sm text-foreground font-body transition-all duration-150 hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-sm cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
