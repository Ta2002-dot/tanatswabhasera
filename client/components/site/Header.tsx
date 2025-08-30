import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#references", label: "References" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#top" className="flex items-baseline gap-2" aria-label="Go to top" />
        <nav className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
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
            <a href="#contact">Hire Me</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
