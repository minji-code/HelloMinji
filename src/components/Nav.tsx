import { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border/20 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex items-center justify-between h-14">
        <span className="font-display text-sm font-semibold text-foreground">
          Minji K. Suh
        </span>
        <div className="flex items-center gap-6">
          {[
            { label: "Experience", href: "#experience" },
            { label: "Skills", href: "#skills" },
            { label: "Education", href: "#education" },
          ].map(({ label, href }) => (
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
            className="text-sm font-semibold px-4 py-1.5 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Connect
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
