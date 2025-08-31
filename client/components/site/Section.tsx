import { PropsWithChildren, ReactNode } from "react";

interface SectionProps extends PropsWithChildren {
  id?: string;
  title?: ReactNode;
  description?: ReactNode;
}

export default function Section({
  id,
  title,
  description,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden scroll-mt-24 py-12 sm:py-16 glossy-bg"
    >
      <div className="glossy-overlay" />
      <div className="pointer-events-none absolute -left-24 top-10 h-40 w-40 bubble bubble-red opacity-40 hidden md:block -z-10" />
      <div className="pointer-events-none absolute -right-16 bottom-8 h-24 w-24 bubble bubble-red opacity-30 hidden md:block -z-10" />
      <div className="pointer-events-none absolute right-10 top-1/2 -translate-y-1/2 h-10 w-10 bubble bubble-red opacity-40 hidden md:block -z-10" />
      <div className="container mx-auto">
        {title && (
          <div className="mb-6 sm:mb-8 rounded-2xl p-4 glass-dark shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold heading-gradient">
              {title}
            </h2>
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
