import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Program Management",
    skills: [
      "SDLC Ownership",
      "Technical Roadmapping",
      "Dependency Management",
      "Risk Mitigation",
      "Stakeholder Communication",
    ],
  },
  {
    title: "Engineering & Architecture",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "PHP/Laravel", "C++", "API Design"],
  },
  {
    title: "Data & Infrastructure",
    skills: ["MySQL", "PostgreSQL", "AWS (Amplify)", "Linux", "Postman"],
  },
  {
    title: "Workflows",
    skills: ["Git (Branching/Rebasing)", "npm/pnpm", "Playwright", "Root Cause Analysis"],
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
              <h3 className="font-display text-sm font-semibold tracking-widest uppercase text-accent mb-4">
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
