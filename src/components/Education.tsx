import { motion } from "framer-motion";
import { PiGraduationCap } from "react-icons/pi";

const EducationSection = () => {
  return (
    <section className="py-24 bg-card" id="education">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl md:text-4xl font-bold text-primary mb-16"
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <PiGraduationCap className="text-accent" size={24} />
          </div>
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
