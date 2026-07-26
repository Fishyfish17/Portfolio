// Subtle reveal-on-scroll for sections. No frameworks, no build step.
document.addEventListener('DOMContentLoaded', () => {
  const targets = document.querySelectorAll(
    '.contact-card, .call-log__entry, .edu-card, .skill-meter, .app-tile'
  );

  targets.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(14px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => io.observe(el));
});
