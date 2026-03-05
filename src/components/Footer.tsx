import {BsLinkedin, BsGithub} from 'react-icons/bs'

const FooterSection = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-sm text-muted-foreground">
          © 2026 Minji K. Suh
        </p>
        <div className="flex gap-4">
          <a href="https://linkedin.com/in/minji-k-suh" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <BsLinkedin size={18} />
          </a>
          <a href="https://github.com/minji-code" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent transition-colors">
            <BsGithub size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
