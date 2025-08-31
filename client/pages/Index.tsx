import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  ExternalLink,
  Wrench,
  Shield,
  Server,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";

export default function Index() {
  return (
    <div id="top">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            "radial-gradient(900px 500px at -10% 110%, rgba(239,68,68,0.15) 0%, rgba(239,68,68,0) 55%), radial-gradient(900px 500px at 110% -10%, rgba(239,68,68,0.12) 0%, rgba(239,68,68,0) 55%)",
          backgroundColor: "#0b1220",
        }}
      >
        <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 bubble bubble-red" />
        <div className="pointer-events-none absolute -right-16 -top-16 h-60 w-60 bubble bubble-red" />
        <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 h-10 w-10 bubble bubble-red" />
        <div className="container mx-auto grid gap-6 py-16 sm:py-20 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2 pr-3 mr-5 glass-dark p-6 rounded-3xl">
            <p className="text-sm font-medium tracking-tight">Hello, I’m</p>
            <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold leading-tight font-display">
              Tanatswa Bhasera
            </h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl">
              Dedicated and performance-driven Information Technology
              professional with proven experience in IT operations, support, and
              systems management. I provide services in software development,
              networking, system administration, cybersecurity, and IT support,
              helping organizations optimize efficiency and security. Known for
              reliability, strong problem-solving capabilities, and a passion
              for advancing technology, I specialize in delivering practical and
              innovative solutions tailored to organizational needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white"
              >
                <a
                  href="mailto:bhaseratanatswa30@gmail.com"
                  aria-label="Say Hello"
                >
                  Say Hello!
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-500 text-slate-100 hover:bg-white/10"
              >
                <a
                  href="https://cdn.builder.io/o/assets%2F151040adad4644778a8544b549b97ad5%2Fa5ab4c6b237f433a9afb8e882da4bcf4?alt=media&token=20fc5235-bb6e-4636-b115-ca18f9d1d4f1&apiKey=151040adad4644778a8544b549b97ad5"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download CV"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href="tel:+263777015981"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +263 777 015 981
              </a>
              <span className="text-muted-foreground/40">•</span>
              <a
                href="tel:+263713024678"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Phone className="h-4 w-4" />
                +263 713 024 678
              </a>
              <span className="text-muted-foreground/40">•</span>
              <a
                href="mailto:bhaseratanatswa30@gmail.com"
                className="inline-flex items-center gap-2 hover:text-foreground transition-colors"
              >
                <Mail className="h-4 w-4" />
                bhaseratanatswa30@gmail.com
              </a>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-full border bg-gradient-to-b from-primary/10 to-background p-2 shadow-lg ring-1 ring-primary/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F2807a407e777435e8d518e17cdef0b89?format=webp&width=800"
                  alt="Tanatswa Bhasera portrait"
                  className="w-full h-auto min-h-[200px] max-w-[500px] self-center rounded-full object-cover bg-white drop-shadow-xl scale-110 mt-[9px]"
                  style={{ objectPosition: "60% 60%" }}
                  loading="eager"
                />
              </div>
            </div>
            <div className="mt-6 clay-card p-6">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Zimbabwean • Single
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  Born: 16 July 2002
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  License: Class 4 (7 years)
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  English & Shona — Fluent
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={<>About</>}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="prose prose-slate max-w-none dark:prose-invert">
              <p>
                Dedicated and performance-driven Information Technology
                professional with proven experience in IT operations, support,
                and systems management. I provide services in software
                development, networking, system administration, cybersecurity,
                and IT support, helping organizations optimize efficiency and
                security.
              </p>
              <p>
                Known for reliability, strong problem-solving capabilities, and
                a passion for advancing technology, I specialize in delivering
                practical and innovative solutions tailored to organizational
                needs.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="clay-card p-5">
              <h4 className="font-semibold">Core Focus</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Software Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Networking
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  System Administration
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Cybersecurity
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  IT Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section
        id="skills"
        title={<>Skills</>}
        description={<>A blend of software, infrastructure, and soft skills.</>}
      >
        <div className="space-y-8">
          <div>
            <h3 className="mb-3 text-lg font-semibold heading-gradient">Core Skills</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Frontend Development"
                items={["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"]}
              />
              <SkillCard
                title="Frameworks & Libraries"
                items={["React.js", "Angular", "Vue.js (optional)", "jQuery"]}
              />
              <SkillCard
                title="Backend Development"
                items={[
                  "Node.js",
                  "Express.js",
                  "PHP",
                  "Python (Django/Flask)",
                  "Java (Spring Boot)",
                ]}
              />
              <SkillCard
                title="Databases"
                items={["MySQL", "PostgreSQL", "MongoDB", "SQLite"]}
              />
              <SkillCard
                title="Version Control"
                items={["Git", "GitHub", "GitLab", "Bitbucket"]}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold heading-gradient">Advanced Skills</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard title="APIs" items={["RESTful APIs", "GraphQL"]} />
              <SkillCard title="Auth" items={["JWT", "OAuth"]} />
              <SkillCard
                title="Cloud Platforms"
                items={["AWS", "Azure", "Google Cloud"]}
              />
              <SkillCard
                title="Containerization & DevOps"
                items={[
                  "Docker",
                  "Kubernetes",
                  "CI/CD (GitHub Actions, Jenkins)",
                ]}
              />
              <SkillCard
                title="Testing"
                items={["Jest", "Mocha", "PHPUnit", "Selenium"]}
              />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold heading-gradient">UI/UX & Tools</h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <SkillCard
                title="Responsive Design"
                items={["Bootstrap", "TailwindCSS"]}
              />
              <SkillCard title="Prototyping" items={["Figma", "Adobe XD"]} />
              <SkillCard title="Web Accessibility" items={["WCAG"]} />
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-lg font-semibold heading-gradient">Soft Skills</h3>
            <SkillCard
              title="Soft Skills"
              items={[
                "Problem-Solving & Debugging",
                "Agile & Scrum Methodologies",
                "Communication & Team Collaboration",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Projects */}
      <Section
        id="projects"
        title={<>Projects</>}
        description={
          <>
            Selected work showcasing engineering, reliability, and user-focused
            outcomes.
          </>
        }
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="BikkeIT – Urban Bike Transportation Service"
            description="Built the digital presence for a Zimbabwean bike transport service, highlighting quality service, expert riders, and a safe, affordable city‑riding experience."
            tags={["React", "Tailwind", "Node.js", "Express", "MongoDB", "Netlify", "Heroku", "Figma"]}
            images={[
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F76032994b15540b685935e81bd28b22c?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fa5843411def548dfaf54f5b99ac46527?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F2d2ba77440a9485c8685c9ce8c0f7dcd?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F055b45dc4c6c42dc8498a711cf7a69c1?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F6a501432b68c4baab70b66c5744cbfe0?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F3d2b532c8fd448a0af9512f997995bfd?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F2320a9973a784c21aa9af27003124638?format=webp&width=800",
            ]}
          />
          <ProjectCard
            title="PGLife – Off‑Campus Student Accommodation Portal (CUT)"
            description="Portal helping CUT students find safe, affordable housing with listings, filters, user profiles, and reviews."
            tags={["HTML5", "CSS3", "JavaScript", "Bootstrap", "PHP", "MySQL", "cPanel"]}
            images={[
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fd5e8de9d3d164674a469291c0b968832?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fb80d25a016644b06be7d7148d2584257?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F5a5b85db142746e2b18db86591991d60?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Ff9f9d1852d404ba8ab41d4c9a041be03?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F131afb24b5a649c4b3fdc47215a34b72?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fe146244d0c4e4d8f85bf4d0fa6d21cb5?format=webp&width=800",
            ]}
          />
          <ProjectCard
            title="CUT | VHOTAi – Online Voting Platform"
            description="Secure e‑voting system for CUT SRC elections with voter authentication, manifesto display, and real-time results."
            tags={["React", "Bootstrap", "Node.js", "Express", "MySQL", "JWT", "AES", "SSL"]}
            images={[
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fb263b6c5abd84569931e8700399f3490?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F30c844b22c4d451a85b34b73a28b4ff9?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F9f846f19018e400b9aa12d25f19b83da?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F220908ffa1c0496c8247f47e5bd0ee8b?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F8d3270eeaef84c81a168c6ba5c5196b2?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F1dc65774ac6a49558a0fdb4b0b6dc643?format=webp&width=800",
            ]}
          />
          <ProjectCard
            title="Tana’s Portfolio – Personal Developer Website"
            description="Personal portfolio showcasing background, skills, interactive project case studies, CV download, and contact. Fully responsive with modern UI/UX."
            tags={["React", "Tailwind", "Framer Motion", "Netlify", "GitHub", "Figma", "Canva"]}
            images={[
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Ff38e12aa723f461db430c7c07ebb82f3?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F7f7a514136cd4d12a5415cb2f988d7bd?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F2c215891e6da45b6a4a1b5a69a0ea0d0?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F612292acb4a5489ab923439609aff81e?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Faa8b851ece544b8e925df66cc0d7fa6d?format=webp&width=800",
              "https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2Fc7651a36f4714f71b9f0e115e7b21c18?format=webp&width=800",
            ]}
          />
        </div>
      </Section>

      {/* Services */}
      <Section
        id="services"
        title={<>Services</>}
        description={<>Practical, secure, and maintainable IT solutions.</>}
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard
            icon={<Wrench className="h-5 w-5 text-primary" />}
            title="Software Development"
            points={[
              "Web apps & dashboards",
              "Automation scripts",
              "API integrations",
            ]}
          />
          <ServiceCard
            icon={<Server className="h-5 w-5 text-primary" />}
            title="Systems & Networking"
            points={[
              "AD/ERP administration",
              "Backups & restoration",
              "Monitoring & inventory",
            ]}
          />
          <ServiceCard
            icon={<Shield className="h-5 w-5 text-primary" />}
            title="Cybersecurity & Support"
            points={[
              "Endpoint hardening",
              "User support & training",
              "Policy & compliance",
            ]}
          />
        </div>
      </Section>

      {/* Contact */}
      <Section
        id="contact"
        title={<>Get In Touch</>}
        description={
          <>
            I’m available for full-time roles, internships, and freelance
            opportunities.
          </>
        }
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="clay-card p-6">
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 grid gap-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +263 777 015 981
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                +263 713 024 678
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                bhaseratanatswa30@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                990 Glenview 7, Harare, Zimbabwe
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:bhaseratanatswa30@gmail.com">
                  <Mail className="h-4 w-4" />
                  Email Me
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:+263777015981">
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 clay-card p-6">
            <h4 className="font-semibold">Why work with me?</h4>
            <p className="mt-2 text-sm text-muted-foreground">
              Reliable, detail-oriented, and committed to delivering secure and
              efficient IT solutions tailored to organizational needs. I bring
              hands-on experience across networks, systems, and software.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-xl p-4">
                <h5 className="font-medium">Proven IT Operations</h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  Experience across networking, systems, and cybersecurity.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <h5 className="font-medium">User-Focused Support</h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  Timely, quality support that keeps teams productive.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <h5 className="font-medium">Continuous Learning</h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  Always up-to-date with the latest technologies.
                </p>
              </div>
              <div className="glass rounded-xl p-4">
                <h5 className="font-medium">Collaborative</h5>
                <p className="mt-1 text-sm text-muted-foreground">
                  Clear communication with technical and non-technical teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="clay-card p-6">
      <h4 className="font-semibold">{title}</h4>
      <div className="mt-3 flex flex-wrap gap-2">
        {items.map((s) => (
          <span
            key={s}
            className="rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-foreground/90"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  images,
}: {
  title: string;
  description: string;
  tags: string[];
  images?: string[];
}) {
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  return (
    <div className="clay-card p-6 flex flex-col gap-3">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full bg-secondary px-2.5 py-1 text-xs"
          >
            {t}
          </span>
        ))}
      </div>
      {images && images.length > 0 && (
        <div className="mt-3 -mx-1 overflow-x-auto">
          <div className="flex gap-3 px-1">
            {images.slice(0, 3).map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${title} preview ${i + 1}`}
                className="h-20 w-auto rounded-md border border-white/10 shadow"
                loading={i === 0 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      )}
      <div className="mt-3">
        {images && images.length > 0 ? (
          <Dialog open={open} onOpenChange={(o)=>{ setOpen(o); if (o) setIdx(0); }}>
            <DialogTrigger asChild>
              <Button variant="outline" className="clay-button">
                <ExternalLink className="h-4 w-4" />
                View
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[900px] w-[90vw] sm:w-[80vw] max-h-[85vh] overflow-auto">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription className="text-sm">{description}</DialogDescription>
              </DialogHeader>
              <div className="relative mt-2">
                <img src={(images && images[idx]) ? images[idx] : images?.[0]} alt={`${title} screenshot ${idx + 1}`} loading="eager" decoding="async" className="mx-auto block h-auto max-h-[70vh] w-auto max-w-full object-contain rounded-lg border border-white/10 shadow bg-black/20" />
                {images && images.length > 1 && (
                  <div className="absolute inset-0 flex items-center justify-between px-2">
                    <button aria-label="Previous" className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60" onClick={(e)=>{ e.stopPropagation(); setIdx((p)=> (p - 1 + images!.length) % images!.length); }}>
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button aria-label="Next" className="rounded-full bg-black/40 p-2 text-white hover:bg-black/60" onClick={(e)=>{ e.stopPropagation(); setIdx((p)=> (p + 1) % images!.length); }}>
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                )}
                <div className="mt-2 text-center text-xs text-slate-300">{idx + 1} / {images?.length}</div>
              </div>
              <div className="mt-4 flex justify-end">
                <DialogClose asChild><Button variant="outline">Close</Button></DialogClose>
              </div>
            </DialogContent>
          </Dialog>
        ) : (
          <Button asChild variant="outline" className="clay-button">
            <a href="#contact">
              <ExternalLink className="h-4 w-4" />
              View
            </a>
          </Button>
        )}
      </div>
    </div>
  );
}

function ServiceCard({
  icon,
  title,
  points,
}: {
  icon: React.ReactNode;
  title: string;
  points: string[];
}) {
  return (
    <div className="clay-card p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}
