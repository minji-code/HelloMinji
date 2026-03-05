import { motion } from "framer-motion";

const experiences = [
  {
    company: "Roadway Management Technologies",
    period: "Dec 2022 – Present",
    roles: [
      {
        title: "Technical Program Manager",
        period: "Feb 2026 – Present",
        bullets: [
          "Serve as the primary technical translator between executive leadership and engineering to align technical roadmaps with long-term business goals.",
          "Directing discovery, design, and execution phases for major platform enhancements, ensuring operational readiness and scalability.",
          "Identifying and resolving cross-team dependencies to maintain high feature velocity and ensure on-time delivery.",
          "Leading root cause analysis for production issues and defining internal standards to protect system stability.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Dec 2022 – Jan 2026",
        bullets: [
          "Led the full-stack migration of a production SaaS platform from Laravel to React/Next.js, improving code maintainability.",
          "Designed performance-optimized UI components and backend API endpoints while refactoring core database structures.",
          "Implemented scalable system updates and triaged production issues through rapid hotfixes to minimize downtime.",
          "Standardized internal development workflows using Git and contributed to team-wide documentation practices.",
        ],
      },
    ],
  },
  {
    company: "OneTrust, LLC",
    period: "Jan 2020 – Jun 2022",
    roles: [
      {
        title: "Instructional Design Consultant",
        period: "Jan 2020 – Jun 2022",
        bullets: [
          "Partnered with cross-functional Legal and Security teams to define requirements and deliver complex technical training.",
          "Consulted with clients to assess project scope and drafted custom Statements of Work aligned with business objectives.",
          "Evaluated product effectiveness by integrating stakeholder feedback and performance data into project iterations.",
          "Managed end-to-end delivery of eLearning courses by coordinating between technical and non-technical departments.",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24" id="experience">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16"
        >
          Experience
        </motion.h2>

        <div className="space-y-16">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6">
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <span className="text-muted-foreground text-sm mt-1 md:mt-0">{exp.period}</span>
              </div>

              <div className="border-l-2 border-accent/30 pl-6 space-y-10">
                {exp.roles.map((role) => (
                  <div key={role.title}>
                    <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-3">
                      <h4 className="font-display font-semibold text-foreground flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-accent -ml-[1.85rem] mr-2 shrink-0" />
                        {role.title}
                      </h4>
                      <span className="text-muted-foreground text-sm">{role.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {role.bullets.map((bullet, j) => (
                        <li key={j} className="text-muted-foreground text-sm leading-relaxed pl-1">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
