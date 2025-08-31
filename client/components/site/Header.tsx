import { Button } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full bg-slate-950/60 backdrop-blur-xl border-b border-white/10 text-slate-100">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a
          href="#top"
          className="flex items-baseline gap-2"
          aria-label="Go to top"
        >
          <span className="font-brand text-2xl text-white">
            Tana's Portfolio
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="tel:+263777015981"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">+263 777 015 981</span>
          </a>
          <a
            href="mailto:bhaseratanatswa30@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Mail className="h-4 w-4" />
            <span className="hidden lg:inline">Email</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Harare, Zimbabwe
          </span>
          <div className="ml-2 flex items-center gap-2">
            <a
              href="https://www.facebook.com/share/17JjzuijiD/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-muted-foreground hover:text-foreground"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/preacher.zw?igsh=MTJxbWUxbTAycXlnZA=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-muted-foreground hover:text-foreground"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="https://github.com/Ta2002-dot"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/tanatswa-bhasera-611a6a334/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/263777015981"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
          <Button
            asChild
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white"
          >
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
