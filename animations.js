document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-section");

  if (!("IntersectionObserver" in window)) {
    // Fallback: if browser is old, just show everything
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // animate once
        }
      });
    },
    {
      threshold: 0.18,
    }
  );

  sections.forEach((el) => observer.observe(el));
});
