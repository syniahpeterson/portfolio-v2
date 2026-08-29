function CaseStudyGallery({ gallery = [] }) {
  if (!gallery.length) {
    return null;
  }

  return (
    <section>
      <div className="grid gap-6">
        {gallery.map((item) => (
          <figure key={item.image}>
            <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)]">
              <img
                src={item.image}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
              />
            </div>

            {item.caption && (
              <figcaption className="mt-3 text-sm leading-6 text-[var(--color-text-muted)]">
                {item.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default CaseStudyGallery;
