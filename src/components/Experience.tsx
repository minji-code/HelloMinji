import { motion } from "framer-motion";
import fiddle from "../assets/SCR-20260520-obeu.png";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const companyVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE },
  },
};

const bulletContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const bulletVariants = {
  hidden: { opacity: 0, x: -12 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.35, ease: EASE } },
};

const experiences = [
  {
    company: "Roadway Management Technologies",
    period: "Dec 2022 – Present",
    roles: [
      {
        title: "Technical Program Manager",
        period: "Dec 2022 – Present",
        bullets: [
          "Owns discovery-to-delivery for 4–5 significant initiatives in parallel — running stakeholder sessions, authoring PRDs and functional baselines through versioned iterations (v1 → v2), and managing formal scope change across SOW milestones.",
          "Designed the engineering team's sprint/scrum process from scratch: 2-week cadence, bottom-up date-setting, story point estimation, backlog grooming rhythm, and retrospective cycle.",
          "Coordinates 10+ engineers across frontend, data, infrastructure, and R&D — tracking epic ownership, phase transitions, and workstream sequencing across parallel significant epics with multi-month delivery timelines.",
          "Authors end-to-end data flow documentation for multi-stage AI/CV pipelines — covering IoT ingestion (SQS), LLM orchestration, MCP tool execution, HIL routing, DynamoDB writes, and PostGIS integration — with explicit ownership boundaries.",
          "Led full-stack production migration from Laravel to React/Next.js; continues contributing directly to the codebase — shipping the photo viewer, history navigation, and road PCI score table updates.",
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
          "Owned end-to-end implementation programs for enterprise clients — managing project plans, milestone gates, and executive-facing status communication — delivering platform go-lives on schedule across multiple concurrent accounts.",
          "Translated enterprise field issues into structured product requirements delivered directly to Product Management, driving concrete customer requirements into the roadmap backlog across multiple release cycles.",
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
    <section className="py-24 bg-white relative overflow-hidden" id="experience">
      <img src={fiddle} alt="" aria-hidden="true" className="absolute bottom-0 right-0 w-44 lg:w-56 opacity-20 mix-blend-multiply pointer-events-none select-none" />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary relative inline-block">
            Experience
          </h2>
          <motion.div
            className="w-0 h-0.5 bg-accent rounded-full mt-2"
            whileInView={{ width: "2rem" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Stagger parent for company blocks */}
        <motion.div
          className="space-y-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.company}
              variants={companyVariants}
            >
              <motion.div
                className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-6 cursor-default"
                whileHover={{ x: 4 }}
                transition={{ duration: 0.15 }}
              >
                <h3 className="font-display text-xl md:text-2xl font-bold text-foreground">
                  {exp.company}
                </h3>
                <span className="text-muted-foreground text-sm mt-1 md:mt-0">{exp.period}</span>
              </motion.div>

              {/* Timeline line — scaleY reveal */}
              <div className="relative pl-6">
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30 origin-top"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, ease: EASE }}
                  style={{ transformOrigin: "top" }}
                />

                <div className="space-y-10">
                  {exp.roles.map((role) => (
                    <div key={role.title}>
                      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4">
                        <h4 className="font-display font-semibold text-foreground flex items-center gap-3 relative">
                          <span className="absolute -left-[1.85rem] w-2.5 h-2.5 rounded-full bg-accent ring-2 ring-background shrink-0" />
                          {role.title}
                        </h4>
                        <span className="text-muted-foreground text-sm md:ml-4 shrink-0">{role.period}</span>
                      </div>

                      {/* Stagger bullets */}
                      <motion.ul
                        className="space-y-2.5"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={bulletContainerVariants}
                      >
                        {role.bullets.map((bullet, j) => (
                          <motion.li
                            key={j}
                            variants={bulletVariants}
                            className="text-muted-foreground text-[0.8375rem] leading-[1.65] pl-1 before:content-['–'] before:mr-2 before:text-accent/60"
                          >
                            {bullet}
                          </motion.li>
                        ))}
                      </motion.ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
