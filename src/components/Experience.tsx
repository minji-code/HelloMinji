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
          "Lead end-to-end delivery of two parallel AI/ML pipelines — computer vision road distress detection and LLM-based pavement condition scoring — coordinating hardware, data engineering, infrastructure, DevOps, and front-end teams.",
          "Manage a 10+ person team and two external contractors (CV and DevOps), owning standup structure, board governance, SOW alignment, and milestone gate tracking across dual Jira project boards.",
          "Partner with the CTO and CPO on architectural scope decisions, including a major pipeline pivot from an LLM orchestrator to a deterministic runner that eliminated non-determinism and per-image token costs while preserving all CV tool targets.",
          "Own story grooming and delivery readiness: author Jira epics and stories with acceptance criteria, definition of done, and milestone indicators across internal engineering and external contractor boards.",
          "Formalize contractor onboarding and standup governance, defining ticket ownership rules between internal and external teams to eliminate board confusion.",
          "Manage vendor SOW amendments, coordinating scope changes with the external CV team to realign deliverables as architectural decisions and business priorities evolve.",
          "Maintain living program documentation — initiative context files, milestone plans, and architectural decision records — for the engineering and product org.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Dec 2022 – Jan 2026",
        bullets: [
          "Executed a full-stack production migration from Laravel to React/Next.js, reducing technical debt and establishing a component-based architecture that accelerated future feature delivery.",
          "Architected performance-optimized UI components and REST API endpoints alongside a database schema refactor, directly reducing query latency and improving page render times.",
          "Triaged and resolved production incidents through targeted hotfixes, maintaining platform uptime and minimizing mean time to resolution.",
          "Defined Git branching and code review standards adopted across the engineering team, and authored internal documentation that reduced engineer ramp-up time.",
        ],
      },
    ],
  },
  {
    company: "OneTrust",
    period: "Jan 2020 – Jun 2022",
    roles: [
      {
        title: "Instructional Design Consultant",
        period: "Aug 2020 – Jun 2022",
        bullets: [
          "Scoped enterprise client engagements by authoring custom Statements of Work, translating ambiguous regulatory and technical requirements into discrete, deliverable-bound project phases.",
          "Collaborated with Legal, Security, and SMEs to develop technical eLearning courses, including Incident Preparedness and Data Privacy.",
          "Built a suite of operational artifacts — software usage guidelines, project procedure playbooks, and product enhancement trackers — that standardized delivery workflows across the department.",
          "Synthesized product performance metrics and stakeholder feedback into prioritized improvement recommendations, driving iterative product updates across multiple release cycles.",
        ],
      },
      {
        title: "Implementation Consultant",
        period: "Jan 2020 – Aug 2020",
        bullets: [
          "Managed functional implementation projects and platform adoption using detailed project plans and milestone tracking.",
          "Channeled customer-reported technical issues and product gaps directly to Product Management, influencing the backlog with field-sourced requirements from enterprise accounts.",
          "Designed custom technical workarounds during customer onboarding to resolve product gaps, enabling enterprise clients to go live on schedule without waiting for roadmap fixes.",
          "Consulted customers on data privacy compliance (GDPR/CCPA) within various technical frameworks and system limitations.",
        ],
      },
    ],
  },
  {
    company: "Georgia Institute of Technology",
    period: "Dec 2018 – Jan 2020",
    roles: [
      {
        title: "Research Assistant",
        period: "Dec 2018 – Jan 2020",
        bullets: [
          "Developed multivariate regression models to predict aircraft component failure rates, enabling the Colombian Air Force to shift from reactive to preventative maintenance scheduling.",
          "Performed rigorous data cleaning and predictor selection to ensure model accuracy across multiple aircraft datasets.",
          "Built a VBA-based forecasting tool that automated weekly failure-risk analysis reports across four aircraft types, eliminating manual reporting and freeing analyst time for higher-order work.",
          "Delivered data-driven analysis reports to stakeholders, translating statistical findings into actionable maintenance schedules.",
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
