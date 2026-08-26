import Hero from "../sections/Hero";

function Home() {
  return (
    <>
      <Hero />

      <section
        id="what-i-do"
        className="min-h-screen border-t border-[var(--color-border)]"
      >
        <div className="mx-auto max-w-[var(--container-width)] px-6 py-24">
          <h2 className="text-4xl font-bold">What I Do</h2>
        </div>
      </section>
    </>
  );
}

export default Home;
