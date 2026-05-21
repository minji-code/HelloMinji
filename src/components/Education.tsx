import { motion } from "framer-motion";
import { PiGraduationCap } from "react-icons/pi";
import branch from "../assets/SCR-20260520-obdg.png";
import sprig from "../assets/SCR-20260520-oazd.png";

const EASE = [0.25, 0.1, 0.25, 1] as const;

const EducationSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden" id="education">
      <img src={branch} alt="" aria-hidden="true" className="absolute top-4 -right-2 w-20 lg:w-28 opacity-[0.35] mix-blend-multiply pointer-events-none select-none rotate-[8deg]" />
      <img src={sprig} alt="" aria-hidden="true" className="absolute -bottom-2 left-6 w-16 lg:w-20 opacity-[0.35] mix-blend-multiply pointer-events-none select-none -rotate-[15deg]" />
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE }}
          className="mb-16"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary relative inline-block">
            Education
          </h2>
          <motion.div
            className="w-0 h-0.5 bg-accent rounded-full mt-2"
            whileInView={{ width: "2rem" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          />
        </motion.div>

        {/* Section content: slide in */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
          }}
          className="flex items-start gap-5"
        >
          {/* Icon box: spring pop */}
          <motion.div
            variants={{
              hidden: { scale: 0.7, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", stiffness: 400, damping: 20, delay: 0.2 },
              },
            }}
            className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 ring-1 ring-accent/20"
          >
            <PiGraduationCap className="text-primary" size={24} />
          </motion.div>

          <div>
            <h3 className="font-display text-xl font-bold text-foreground">
              Georgia Institute of Technology
            </h3>
            <p className="text-muted-foreground mt-1">
              Bachelor of Science in Industrial Engineering
            </p>
            <p className="text-muted-foreground text-sm mt-1">Dec 2019</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
