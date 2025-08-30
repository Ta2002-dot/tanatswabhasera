import Section from "@/components/site/Section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

export default function Index() {
  return (
    <div id="top">
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b"
        style={{
          backgroundImage:
            "radial-gradient(circle at 12% 100%, rgba(255,226,176,0.96) 1%, rgba(255,226,176,0) 40%), radial-gradient(circle at 95% -15%, rgba(218,77,241,0.35) 5%, rgba(218,77,241,0) 40%), radial-gradient(100% 100% at 100% 50%, rgba(196,245,233,0.5) 2%, rgba(196,245,233,0) 35%)",
          backgroundColor: "#fff",
        }}
      >
        <div className="container mx-auto grid gap-6 py-16 sm:py-20 lg:grid-cols-3 lg:gap-10">
          <div className="lg:col-span-2">
            <p className="text-sm font-medium tracking-tight">Hello, I’m</p>
            <h1 className="mt-2 text-5xl sm:text-6xl font-extrabold leading-tight font-display">Tanatswa Bhasera</h1>
            <p className="mt-4 text-base sm:text-lg text-foreground/80 max-w-2xl">
              I’m a Freelance
              <span
                className="px-1"
                style={{
                  backgroundImage: "linear-gradient(to top, rgb(255,200,200) 40%, transparent 40%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                UI/UX Designer
              </span>
              and
              <span
                className="px-1"
                style={{
                  backgroundImage: "linear-gradient(to top, rgb(255,200,200) 40%, transparent 40%)",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "100% 100%",
                }}
              >
                Developer
              </span>
              based in Harare, Zimbabwe. I build immersive and beautiful web
              applications through carefully crafted code and user‑centric design.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <a href="mailto:bhaseratanatswa30@gmail.com" aria-label="Say Hello">Say Hello!</a>
              </Button>
              <Button asChild variant="secondary">
                <a href="https://cdn.builder.io/o/assets%2F151040adad4644778a8544b549b97ad5%2Fa5ab4c6b237f433a9afb8e882da4bcf4?alt=media&token=20fc5235-bb6e-4636-b115-ca18f9d1d4f1&apiKey=151040adad4644778a8544b549b97ad5" target="_blank" rel="noreferrer" aria-label="Download CV"><Download className="mr-2 h-4 w-4"/>Download CV</a>
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a href="tel:+263777015981" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4"/>+263 777 015 981</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="tel:+263713024678" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Phone className="h-4 w-4"/>+263 713 024 678</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="mailto:bhaseratanatswa30@gmail.com" className="inline-flex items-center gap-2 hover:text-foreground transition-colors"><Mail className="h-4 w-4"/>bhaseratanatswa30@gmail.com</a>
              <span className="text-muted-foreground/40">•</span>
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>990 Glenview 7, Harare, Zimbabwe</span>
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="mx-auto w-full max-w-sm">
              <div className="relative mx-auto aspect-square max-w-[320px] overflow-hidden rounded-full border bg-gradient-to-b from-primary/10 to-background p-2 shadow-lg ring-1 ring-primary/20">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F151040adad4644778a8544b549b97ad5%2F778f510915214189bb148559140cf257?format=webp&width=800"
                  alt="Tanatswa Bhasera portrait"
                  className="h-full w-full rounded-full object-contain bg-white drop-shadow-xl"
                  loading="eager"
                />
              </div>
            </div>
            <div className="mt-6 rounded-2xl border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-semibold">Quick Facts</h3>
              <ul className="mt-4 grid gap-3 text-sm">
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>Zimbabwean • Single</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>Born: 16 July 2002</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>License: Class 4 (7 years)</li>
                <li className="flex items-start gap-3"><span className="mt-1 h-2 w-2 rounded-full bg-primary"/>English & Shona — Fluent</li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline" className="w-full">
                  <a href="https://cdn.builder.io/o/assets%2F151040adad4644778a8544b549b97ad5%2Fa5ab4c6b237f433a9afb8e882da4bcf4?alt=media&token=20fc5235-bb6e-4636-b115-ca18f9d1d4f1&apiKey=151040adad4644778a8544b549b97ad5" target="_blank" rel="noreferrer"><Download className="h-4 w-4"/>Download CV</a>
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* About */}
      <Section id="about" title={<>Professional Summary</>}>
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
            <div className="rounded-xl border bg-card p-5">
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

      {/* Experience */}
      <Section id="experience" title={<>Professional Experience</>}>
        <div className="grid gap-6">
          <div className="rounded-xl border bg-card p-6 shadow-sm">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="text-xl font-semibold">IT Intern — Victoria Foods (Pvt) Limited</h3>
                <p className="text-muted-foreground">September 2024 – August 2025</p>
              </div>
              <div className="text-sm text-primary font-medium">Harare, Zimbabwe</div>
            </div>
            <ul className="mt-4 grid gap-2 text-sm leading-relaxed">
              <li>Monitor and maintain network devices including firewalls, routing, switches, SANs, and VoIP/PBX.</li>
              <li>Active Directory user administration including creating accounts and resolving password issues.</li>
              <li>Database administration including backups and restoration.</li>
              <li>Implement IT infrastructure software and physical security; cybersecurity protection.</li>
              <li>ERP user administration: trace and correct system/human errors; manage user accounts and password issues.</li>
              <li>Liaise with external support companies and service providers; ensure software licensing compliance.</li>
              <li>First-line troubleshooting of IT problems; provide input into IT strategy and budgeting.</li>
              <li>Coach newly hired employees on advanced technical procedures and systems usage.</li>
              <li>Maintain a knowledge library; contribute to acceptable use policy and internet/email monitoring.</li>
              <li>Assist colleagues with diagnosing software/hardware issues locally and remotely.</li>
              <li>Conduct QA testing across systems to ensure accessibility compliance.</li>
              <li>Maintain inventory of ICT equipment, hardware, and software including documentation and registers.</li>
              <li>Configure and maintain applications and user devices; provide timely technical support.</li>
              <li>Test, evaluate, and support roll-out of new applications or updates.</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Education & Certifications */}
      <Section id="education" title={<>Education</>}>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Bachelor of Science (Hons) in Information Technology</h4>
            <p className="text-sm text-muted-foreground">Chinhoyi University of Technology — Current</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">First Choice Private School</h4>
            <p className="text-sm text-muted-foreground">Graduated 2021 — Achieved 13 points (Computer Science, Business Studies, Statistics)</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Highfield High 1 School</h4>
            <p className="text-sm text-muted-foreground">Graduated 2019 — 9 O Level passes (incl. Mathematics, English, Science)</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Kuwangira Primary School</h4>
            <p className="text-sm text-muted-foreground">Graduated — Achieved 10 units</p>
          </div>
        </div>
      </Section>

      <Section id="certifications" title={<>Certifications</>}>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Diploma in AI & Big Data Analytics</h4>
            <p className="text-sm text-muted-foreground">Zimbabwe Centre for High Performance Computing (ZCHPC)-UZ | Jun 2024 – Dec 2024</p>
          </div>
          <div className="rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Leadership & Communication Best Award</h4>
            <p className="text-sm text-muted-foreground">First Choice School of Business and Applied Arts | 2020</p>
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
          <SkillCard title="Tools & Technologies" items={["Microsoft Office", "Power BI", "ESET Security", "Remote Desktop", "Microsoft Dynamics NAV"]} />
          <SkillCard title="Networking" items={["Data communication", "Network configuration", "Troubleshooting"]} />
          <SkillCard title="Soft Skills" items={["Management", "Problem-solving", "Analytical", "Work under pressure", "Interpersonal skills"]} />
        </div>
      </Section>

      {/* Languages */}
      <Section id="languages" title={<>Languages</>}>
        <div className="rounded-xl border bg-card p-6">
          <ul className="grid gap-3 sm:grid-cols-2">
            <li><span className="font-medium">English</span>: Fluent</li>
            <li><span className="font-medium">Shona</span>: Fluent</li>
          </ul>
        </div>
      </Section>

      {/* References */}
      <Section id="references" title={<>References</>}>
        <div className="grid gap-6 md:grid-cols-3">
          <ReferenceCard name="Mr. E Matanhire" role="Principal, First Choice Private School" phone="+263 775 251 796" email="elijahmatanhire@gmail.com" />
          <ReferenceCard name="Dr. F.J. Kiwa" role="ICT Chairperson, Chinhoyi University of Technology" phone="+263 778 256 462" email="fungaijackiwa@cut.ac.zw" />
          <ReferenceCard name="Mr. S Matiya" role="Attachment Supervisor, Victoria Foods (Pvt) Limited" phone="+263 718 335 333" email="shorai.matiya@vicfoods.co.zw" />
        </div>
      </Section>

      {/* Personal Details */}
      <Section id="personal-details" title={<>Personal Details</>}>
        <div className="rounded-xl border bg-card p-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          <Detail label="Nationality" value="Zimbabwean" />
          <Detail label="Date of Birth" value="16 July 2002" />
          <Detail label="Marital Status" value="Single" />
          <Detail label="Religion" value="Christianity" />
          <Detail label="License" value="Class 4 (7 years’ experience)" />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title={<>Get In Touch</>} description={<>I’m available for full-time roles, internships, and freelance opportunities.</>}>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-xl border bg-card p-6">
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
          <div className="lg:col-span-2 rounded-xl border bg-card p-6">
            <h4 className="font-semibold">Why work with me?</h4>
            <p className="mt-2 text-sm text-muted-foreground">Reliable, detail-oriented, and committed to delivering secure and efficient IT solutions tailored to organizational needs. I bring hands-on experience across networks, systems, and software.</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Benefit title="Proven IT Operations" desc="Experience across networking, systems, and cybersecurity." />
              <Benefit title="User-Focused Support" desc="Timely, quality support that keeps teams productive." />
              <Benefit title="Continuous Learning" desc="Always up-to-date with the latest technologies." />
              <Benefit title="Collaborative" desc="Communicates clearly with technical and non-technical teams." />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-xl border bg-card p-6">
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

function ReferenceCard({ name, role, phone, email }: { name: string; role: string; phone: string; email: string; }) {
  return (
    <div className="rounded-xl border bg-card p-6">
      <h4 className="text-lg font-semibold">{name}</h4>
      <p className="text-sm text-muted-foreground">{role}</p>
      <ul className="mt-4 grid gap-2 text-sm">
        <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary"/>{phone}</li>
        <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary"/>{email}</li>
      </ul>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-muted/30 px-4 py-3">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}

function Benefit({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-lg border bg-muted/20 p-4">
      <h5 className="font-medium">{title}</h5>
      <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}
