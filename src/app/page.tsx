import SiteContainer from "@/components/layout/site-container";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteContainer className="py-12 md:py-16">
        <header className="border-b border-[var(--border)] pb-8">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-stone-500">
            White Mist
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-medium tracking-[-0.06em] text-stone-900 md:text-6xl">
            Thoughtful essentials for the everyday routine.
          </h1>
        </header>

        <section aria-label="Storefront overview" className="mt-12 grid gap-8">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Storefront
            </p>
            <div className="mt-6 h-64 rounded-2xl border border-dashed border-stone-300 bg-stone-50" />
          </div>
        </section>
      </SiteContainer>
    </main>
  );
}
