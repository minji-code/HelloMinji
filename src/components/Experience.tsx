import { motion } from "framer-motion";
import fiddle from "../assets/SCR-20260520-obeu.png";

const experiences = [
  {
    company: "Roadway Management Technologies",
    period: "Dec 2022 – Present",
    roles: [
      {
        title: "Technical Program Manager",
        period: "Feb 2026 – Present",
        bullets: [
          "Drove end-to-end delivery of two parallel AI/ML pipelines — computer vision road distress detection and LLM-based pavement condition scoring — coordinating hardware, data engineering, infrastructure, DevOps, and front-end teams simultaneously.",
          "Directed a 10+ person team and two external contractors across CV and DevOps disciplines, owning standup cadence, board governance, SOW alignment, and milestone gate tracking across dual Jira project boards.",
          "Identified non-determinism and token cost risks in the LLM orchestrator design, built the trade-off analysis, and drove alignment with CTO and CPO to pivot to a deterministic runner — preserving all CV tool targets while eliminating variable per-image costs.",
          "Authored Jira epics and stories with acceptance criteria, definition of done, and milestone indicators across internal and contractor boards, cutting delivery ambiguity across two concurrent workstreams.",
          "Formalized contractor onboarding and standup governance, defining ticket ownership rules between internal and external teams that eliminated cross-board confusion and duplicated work.",
          "Negotiated SOW amendments with the external CV vendor, realigning deliverables to reflect architectural changes and shifting business priorities without slipping milestone gates.",
          "Maintained living program documentation — initiative context files, milestone plans, and architectural decision records — keeping the engineering and product org aligned across a fast-moving dual-pipeline program.",
        ],
      },
      {
        title: "Software Engineer",
        period: "Dec 2022 – Jan 2026",
        bullets: [
          "Executed a full-stack production migration from Laravel to React/Next.js, eliminating legacy technical debt and establishing a component-based architecture that measurably accelerated subsequent feature delivery cycles.",
          "Architected performance-optimized UI components and REST API endpoints alongside a database schema refactor, directly cutting query latency and improving page render times across the platform.",
          "Resolved production incidents through targeted hotfixes, sustaining platform uptime and reducing mean time to resolution across recurring issue patterns.",
          "Defined Git branching and code review standards adopted across the engineering team, and authored internal documentation that shortened new engineer ramp-up time.",
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
          "Partnered with Legal, Security, and SMEs to develop technical eLearning courses — including Incident Preparedness and Data Privacy — delivering compliant training content to enterprise clients.",
          "Built a suite of operational artifacts — software usage guidelines, project procedure playbooks, and product enhancement trackers — that standardized delivery workflows across the department.",
          "Synthesized product performance metrics and stakeholder feedback into prioritized improvement recommendations, driving iterative product updates across multiple release cycles.",
        ],
      },
      {
        title: "Implementation Consultant",
        period: "Jan 2020 – Aug 2020",
        bullets: [
          "Managed functional implementation projects for enterprise clients, using detailed project plans and milestone tracking to drive platform adoption on schedule.",
          "Channeled field-sourced technical issues and product gaps from enterprise accounts directly to Product Management, influencing the roadmap backlog with concrete customer requirements.",
          "Engineered custom technical workarounds during enterprise onboarding, resolving product gaps that allowed clients to go live on schedule without waiting for roadmap fixes.",
          "Advised enterprise clients on GDPR/CCPA compliance implementation within their existing technical frameworks and system constraints.",
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
          "Developed multivariate regression models to predict aircraft component failure rates, enabling the Colombian Air Force to shift from reactive to preventive maintenance scheduling across multiple aircraft types.",
          "Executed rigorous data cleaning and predictor selection across multiple aircraft datasets, ensuring model accuracy before delivery to operational stakeholders.",
          "Built a VBA-based forecasting tool that automated weekly failure-risk analysis reports across four aircraft types, eliminating manual reporting and freeing analyst capacity for higher-order work.",
          "Translated statistical model outputs into actionable maintenance schedules, delivering findings directly to Air Force stakeholders in operationally relevant terms.",
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-36 bg-white relative overflow-hidden" id="experience">
      <img src={fiddle} alt="" aria-hidden="true" className="absolute bottom-0 right-0 w-44 lg:w-56 opacity-20 mix-blend-multiply pointer-events-none select-none" />
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
