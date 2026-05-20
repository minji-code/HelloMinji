import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { BsLinkedin } from "react-icons/bs";

const NAV_LINKS = [
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change / link click
  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14">
          <span className="font-display text-sm font-semibold text-foreground">
            Minji K. Suh
          </span>

          {/* Desktop links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="hidden md:block text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </a>
            ))}
            <a
              href="https://linkedin.com/in/minji-k-suh"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <BsLinkedin size={12} />
              Connect
            </a>

            {/* Mobile hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden p-1.5 rounded-md text-foreground hover:bg-primary/10 transition-colors"
            >
              {menuOpen ? <HiX size={20} /> : <HiMenu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="fixed top-14 left-0 right-0 z-40 bg-background/98 backdrop-blur-sm border-b border-border/20 shadow-md md:hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleNavClick}
                  className="text-sm font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg px-3 py-2.5 transition-colors"
                >
                  {label}
                </a>
              ))}
              <a
                href="https://linkedin.com/in/minji-k-suh"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="mt-2 text-sm font-semibold px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-center"
              >
                Connect on LinkedIn
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Nav;
