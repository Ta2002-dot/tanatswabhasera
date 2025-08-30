import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export default function Section({ id, title, description, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="container mx-auto">
        {title && (
          <div className="mb-6 sm:mb-8 rounded-2xl p-4 bg-white/70 backdrop-blur border border-black/10 shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-bold">{title}</h2>
            {description && (
              <p className="mt-2 text-muted-foreground max-w-3xl">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
