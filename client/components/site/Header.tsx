import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Instagram, Github, Linkedin, MessageCircle } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-900/70 text-slate-100 backdrop-blur border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#top" className="flex items-baseline gap-2" aria-label="Go to top">
          <span className="text-lg font-bold tracking-tight text-foreground">Tanatswa</span>
          <span className="hidden sm:inline text-sm text-muted-foreground">IT Professional</span>
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
          <a href="tel:+263777015981" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">+263 777 015 981</span>
          </a>
          <a href="mailto:bhaseratanatswa30@gmail.com" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <Mail className="h-4 w-4" />
            <span className="hidden lg:inline">Email</span>
          </a>
          <span className="hidden lg:inline-flex items-center gap-1 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" /> Harare, Zimbabwe
          </span>
          <Button asChild size="sm">
            <a href="#contact">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
