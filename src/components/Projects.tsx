import { motion } from "framer-motion";

const projects = [
  {
    title: "AI/ML Road Intelligence Platform",
    tags: ["Computer Vision", "LLM", "AI/ML Pipelines", "Program Management"],
    role: "Technical Program Manager",
    timeline: "Feb 2026 – Present",
    problem:
      "[ Describe the core problem: e.g., 'Manual road inspection was slow, expensive, and inconsistent — the company needed an automated pipeline to detect distress and score pavement condition at scale.' ]",
    approach: [
      "[ What was your specific role in scoping and initiating the program? ]",
      "Led architectural decision to pivot from an LLM orchestrator to a deterministic runner, eliminating non-determinism and per-image token costs while preserving all CV tool targets.",
      "Coordinated parallel delivery across hardware, data engineering, infrastructure, DevOps, and front-end teams — managing two external contractors alongside an internal 10+ person team.",
      "[ Describe a key stakeholder alignment moment or tradeoff you navigated. ]",
    ],
    outcome:
      "[ What shipped? What improved? e.g., 'Delivered MVP X weeks ahead of contract milestone. Pipeline processes N images/day at $Y cost per image, down from $Z with the previous approach.' ]",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-card" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16"
        >
          Featured Work
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border rounded-xl p-8 md:p-10"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-accent/20 text-primary text-xs font-semibold rounded-full font-display tracking-wide uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-8">
                {project.role} · {project.timeline}
              </p>

              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-display text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    The Problem
                  </h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    What I Did
                  </h4>
                  <ul className="space-y-2">
                    {project.approach.map((item, j) => (
                      <li key={j} className="text-foreground text-sm leading-relaxed flex gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-xs font-semibold tracking-widest uppercase text-muted-foreground mb-3">
                    The Outcome
                  </h4>
                  <p className="text-foreground text-sm leading-relaxed">
                    {project.outcome}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
