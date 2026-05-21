import {BsLinkedin, BsGithub} from 'react-icons/bs'

const FooterSection = () => {
  return (
    <footer className="relative overflow-hidden border-t border-border/30 py-12 bg-muted">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-primary">
          © 2026 Minji K. Suh
        </p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/minji-k-suh" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <BsLinkedin size={24} />
          </a>
          <a href="https://github.com/minji-code" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-accent transition-colors">
            <BsGithub size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
