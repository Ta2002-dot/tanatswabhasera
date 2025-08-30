import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download, ExternalLink, Wrench, Shield, Server } from "lucide-react";

export default function Index() {
  return (
    <div id="top">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-white/10"
        style={{
          backgroundImage:
            "radial-gradient(1200px 600px at 0% 100%, rgba(14,20,35,0.30) 0%, rgba(14,20,35,0) 60%), radial-gradient(1000px 500px at 100% 0%, rgba(8,12,24,0.30) 0%, rgba(8,12,24,0) 60%)",
          backgroundColor: "#0b1220",
        }}
      >
        <div className="container mx-auto grid gap-6 py-16 sm:py-20 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2 pr-3 mr-5 glass-dark p-6 rounded-2xl">
            <p className="text-sm font-medium tracking-tight">Hello, I’m</p>
            <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold leading-tight font-display">Tanatswa Bhasera</h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl">
              Dedicated and performance-driven Information Technology professional with proven experience in IT operations, support, and systems management. I provide services in software development, networking, system administration, cybersecurity, and IT support, helping organizations optimize efficiency and security. Known for reliability, strong problem-solving capabilities, and a passion for advancing technology, I specialize in delivering practical and innovative solutions tailored to organizational needs.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild className="bg-[rgba(190,186,167,1)] hover:bg-[rgba(190,186,167,0.9)] text-slate-900">
                <a href="mailto:bhaseratanatswa30@gmail.com" aria-label="Say Hello">Say Hello!</a>
              </Button>
              <Button asChild variant="secondary" className="bg-[rgba(245,155,10,0.46)] hover:bg-[rgba(245,155,10,0.65)] text-slate-50">
                <a href="https://cdn.builder.io/o/assets%2F151040adad4644778a8544b549b97ad5%2Fa5ab4c6b237f433a9afb8e882da4bcf4?alt=media&token=20fc5235-bb6e-4636-b115-ca18f9d1d4f1&apiKey=151040adad4644778a8544b549b97ad5" target="_blank" rel="noreferrer" aria-label="Download CV"><Download className="mr-2 h-4 w-4"/>Download CV</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+263777015981" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4"/>+263 777 015 981</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="tel:+263713024678" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4"/>+263 713 024 678</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="mailto:bhaseratanatswa30@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="h-4 w-4"/>bhaseratanatswa30@gmail.com</a>
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
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>Zimbabwean • Single</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>Born: 16 July 2002</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>License: Class 4 (7 years)</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>English & Shona — Fluent</li>
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
                Dedicated and performance-driven Information Technology professional with proven experience in IT operations, support, and systems management. I provide services in software development, networking, system administration, cybersecurity, and IT support, helping organizations optimize efficiency and security.
              </p>
              <p>
                Known for reliability, strong problem-solving capabilities, and a passion for advancing technology, I specialize in delivering practical and innovative solutions tailored to organizational needs.
              </p>
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="clay-card p-5">
              <h4 className="font-semibold">Core Focus</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"/>Software Development</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"/>Networking</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"/>System Administration</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"/>Cybersecurity</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary"/>IT Support</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Skills */}
      <Section id="skills" title={<>Skills</>} description={<>A blend of software, infrastructure, and soft skills.</>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <SkillCard title="Programming Languages" items={["Python", "C", "C#", "PHP", "Laravel", "C++"]} />
          <SkillCard title="Web Development" items={["HTML", "CSS", "JavaScript", "Front-end frameworks"]} />
          <SkillCard title="Big Data Analytics" items={["Data analysis", "Visualization techniques"]} />
          <SkillCard title="AI & Machine Learning" items={["AI concepts", "Machine learning algorithms"]} />
          <SkillCard title="Database Management" items={["SQL", "Data integrity practices"]} />
          <SkillCard title="Networking" items={["Data communication", "Network configuration", "Troubleshooting"]} />
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects" title={<>Projects</>} description={<>Selected work showcasing engineering, reliability, and user-focused outcomes.</>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Infrastructure Monitoring Dashboard"
            description="Built a React + Express dashboard with real-time network/device status and alerting."
            tags={["React", "Express", "WebSockets"]}
          />
          <ProjectCard
            title="ERP User Administration Tools"
            description="Automated onboarding, password resets, and audit logging for ERP users."
            tags={["Node.js", "SQL", "Security"]}
          />
          <ProjectCard
            title="Secure Backup & Restore"
            description="Scripted reliable database backup/restore routines with integrity checks."
            tags={["Bash", "Postgres", "DevOps"]}
          />
        </div>
      </Section>

      {/* Services */}
      <Section id="services" title={<>Services</>} description={<>Practical, secure, and maintainable IT solutions.</>}>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ServiceCard icon={<Wrench className="h-5 w-5 text-primary" />} title="Software Development" points={["Web apps & dashboards", "Automation scripts", "API integrations"]} />
          <ServiceCard icon={<Server className="h-5 w-5 text-primary" />} title="Systems & Networking" points={["AD/ERP administration", "Backups & restoration", "Monitoring & inventory"]} />
          <ServiceCard icon={<Shield className="h-5 w-5 text-primary" />} title="Cybersecurity & Support" points={["Endpoint hardening", "User support & training", "Policy & compliance"]} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={<>Get In Touch</>} description={<>I’m available for full-time roles, internships, and freelance opportunities.</>}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="clay-card p-6">
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-4 grid gap-3 text-sm">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary"/>+263 777 015 981</li>
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary"/>+263 713 024 678</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary"/>bhaseratanatswa30@gmail.com</li>
              <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary"/>990 Glenview 7, Harare, Zimbabwe</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href="mailto:bhaseratanatswa30@gmail.com"><Mail className="h-4 w-4"/>Email Me</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:+263777015981"><Phone className="h-4 w-4"/>Call Now</a>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-2 clay-card p-6">
            <h4 className="font-semibold">Why work with me?</h4>
            <p className="mt-2 text-sm text-muted-foreground">Reliable, detail-oriented, and committed to delivering secure and efficient IT solutions tailored to organizational needs. I bring hands-on experience across networks, systems, and software.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="glass rounded-xl p-4"><h5 className="font-medium">Proven IT Operations</h5><p className="mt-1 text-sm text-muted-foreground">Experience across networking, systems, and cybersecurity.</p></div>
              <div className="glass rounded-xl p-4"><h5 className="font-medium">User-Focused Support</h5><p className="mt-1 text-sm text-muted-foreground">Timely, quality support that keeps teams productive.</p></div>
              <div className="glass rounded-xl p-4"><h5 className="font-medium">Continuous Learning</h5><p className="mt-1 text-sm text-muted-foreground">Always up-to-date with the latest technologies.</p></div>
              <div className="glass rounded-xl p-4"><h5 className="font-medium">Collaborative</h5><p className="mt-1 text-sm text-muted-foreground">Clear communication with technical and non-technical teams.</p></div>
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

function ProjectCard({ title, description, tags }: { title: string; description: string; tags: string[] }) {
  return (
    <div className="clay-card p-6 flex flex-col gap-3">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-1 text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((t) => (
          <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-xs">{t}</span>
        ))}
      </div>
      <div className="mt-3">
        <Button asChild variant="outline" className="clay-button">
          <a href="#contact"><ExternalLink className="h-4 w-4"/>View</a>
        </Button>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, points }: { icon: React.ReactNode; title: string; points: string[] }) {
  return (
    <div className="clay-card p-6">
      <div className="flex items-center gap-3">
        {icon}
        <h4 className="font-semibold">{title}</h4>
      </div>
      <ul className="mt-3 space-y-2 text-sm">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>{p}</li>
        ))}
      </ul>
    </div>
  );
}
