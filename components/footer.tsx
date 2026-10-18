import { Github, Linkedin, Mail } from 'lucide-react';

const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/khadijakriaa', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/khadija-kriaa-579608334/', icon: Linkedin },
  { label: 'Email', href: 'mailto:kriaakhadija784@gmail.com', icon: Mail },
];

export default function Footer() {
  return (
    <footer className="relative px-4 pt-16 pb-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-10">
        <p className="max-w-2xl text-center italic text-muted-foreground text-lg">
          &ldquo;If you understand time, you&rsquo;re on your way to understanding reality.&rdquo;
        </p>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />

        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Khadija Kriaa
          </span>
          <div className="flex items-center gap-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border/50 flex items-center justify-center text-muted-foreground hover:text-emerald-600 dark:hover:text-emerald-400 hover:border-emerald-500/50 transition-all duration-200"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
