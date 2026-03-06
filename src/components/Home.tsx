import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";

const HomeSection: React.FC = () => {
  const [copiedMessage, setCopiedMessage] = useState<string | null>(null);

  const handleCopy = async (value: string, label: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedMessage(`${label} copied to clipboard`);
      setTimeout(() => setCopiedMessage(null), 2000);
    } catch {
      setCopiedMessage(`Unable to copy ${label}`);
      setTimeout(() => setCopiedMessage(null), 2000);
    }
  };

  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent -skew-x-12 translate-x-20" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-primary/60 font-semibold tracking-widest uppercase text-sm mb-4">
              Technical Program Manager
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-accent leading-[0.95] mb-8"
          >
            Minji K.
            <br />
            <span className="text-primary">Suh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Bridging the gap between executive leadership and engineering teams. 
            3+ years delivering production SaaS platforms with full-lifecycle ownership.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4 text-sm"
          >
            <ContactChip icon={<LuMapPin size={14} />} text="Atlanta, GA" />
            <ContactChip
              icon={<AiOutlineMail size={14} />}
              text="minji.k.suh@gmail.com"
              onClick={() => handleCopy("minji.k.suh@gmail.com", "Email")}
            />
            <ContactChip
              icon={<AiOutlinePhone size={14} />}
              text="+1-404-642-0400"
              onClick={() => handleCopy("+1-404-642-0400", "Phone number")}
            />
            <ContactChip icon={<BsLinkedin size={14} />} text="LinkedIn" href="https://linkedin.com/in/minji-k-suh" />
            <ContactChip icon={<BsGithub size={14} />} text="GitHub" href="https://github.com/minji-code" />
          </motion.div>

          {copiedMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-4 text-xs text-muted-foreground"
            >
              {copiedMessage}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

interface ContactChipProps {
  icon: React.ReactNode;
  text: string;
  href?: string;
  onClick?: () => void;
}

const ContactChip = ({ icon, text, href, onClick }: ContactChipProps) => {
  const classes =
    "flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-foreground hover:border-accent hover:text-accent transition-colors cursor-pointer";
  
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {icon} {text}
      </button>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {icon} {text}
      </a>
    );
  }
  return <span className={classes}>{icon} {text}</span>;
};

export default HomeSection;
