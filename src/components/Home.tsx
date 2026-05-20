import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { LuMapPin } from "react-icons/lu";
import monsteraImg from "../assets/Gemini_Generated_Image.png";
import profilePic from "../assets/profilepic.png";

// const hBulbs = [
//   { x: 80,   y: 90  },
//   { x: 210,  y: 100 },
//   { x: 340,  y: 103 },
//   { x: 470,  y: 97  },
//   { x: 600,  y: 86  },
//   { x: 730,  y: 72  },
//   { x: 860,  y: 76  },
//   { x: 990,  y: 82  },
//   { x: 1110, y: 85  },
//   { x: 1240, y: 89  },
//   { x: 1360, y: 82  },
// ];

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
    <section className="min-h-[90vh] flex items-center relative overflow-hidden pb-16 md:pb-0">
      {/* Terra cotta diagonal strip — hidden on mobile, narrower on md to avoid text overlap */}
      <div className="hidden md:block absolute top-0 right-0 w-[30%] lg:w-1/3 h-full bg-accent -skew-x-12 translate-x-16 lg:translate-x-20" />

      {/* String lights — across top, down right side */}
      {/* <svg
        className="absolute top-0 left-0 w-full pointer-events-none select-none z-[3]"
        viewBox="0 0 1440 160"
        preserveAspectRatio="xMidYMin meet"
        aria-hidden="true"
      >
        <path
          d="M -10,80 C 360,118 720,58 1080,82 C 1260,96 1380,80 1440,78 L 1440,400"
          fill="none"
          stroke="#8B6B4A"
          strokeWidth="1.5"
          opacity="0.5"
        />
        {hBulbs.map(({ x, y }) => (
          <g key={x}>
            <line x1={x} y1={y} x2={x} y2={y + 18} stroke="#8B6B4A" strokeWidth="1" opacity="0.45" />
            <circle cx={x} cy={y + 27} r={10} fill="#FFCB77" opacity="0.22" />
            <circle cx={x} cy={y + 27} r={5}  fill="#FFCB77" opacity="0.55" />
          </g>
        ))}
      </svg> */}

      {/* Monstera illustration — bottom right, in front of strip */}
      <div className="hidden md:block absolute bottom-0 right-0 w-56 lg:w-72 z-10 pointer-events-none select-none">
        <img src={monsteraImg} alt="" className="w-full h-full object-contain" />
      </div>

      {/* Profile photo — sits on the diagonal strip edge; pushed further right on lg to match wider strip */}
      <div className="hidden md:block absolute right-[17%] lg:right-[19%] top-[42%] -translate-y-1/2 z-20">
        <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden ring-4 ring-background shadow-2xl bg-muted">
          <img src={profilePic} alt="Minji K. Suh" className="w-full h-full object-cover object-top" />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-14">
        <div className="max-w-xl md:max-w-2xl lg:max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="font-display text-primary font-semibold tracking-widest uppercase text-sm mb-4">
              Technical Program Manager
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6 md:mb-8"
          >
            Minji K.
            <br />
            <span className="text-primary">Suh</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed"
          >
            Shipped production AI/ML systems and full-stack SaaS platforms as both engineer and TPM — now driving cross-functional delivery at the intersection of infra, data, and product.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/25 text-primary text-xs font-semibold tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
              Open to Senior TPM roles
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 md:gap-4 text-sm"
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
    "flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-card border border-border text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer whitespace-nowrap";

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
