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
/* Premium rotating services button */
.premium-rotate-btn {
  position: relative;
  padding: 8px 22px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.06);
  color: #f7e3a3;
  font-weight: 600;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow: 0 0 0 1px rgba(247, 227, 163, 0.2);
}

/* subtle glowing ring */
.premium-rotate-btn::before {
  content: "";
  position: absolute;
  inset: -3px;
  border-radius: inherit;
  border: 1px solid rgba(247, 227, 163, 0.4);
  box-shadow: 0 0 14px rgba(247, 227, 163, 0.35);
  pointer-events: none;
}

/* moving highlight around the border */
.premium-rotate-btn::after {
  content: "";
  position: absolute;
  width: 180%;
  height: 180%;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.8);
  border-color: rgba(255, 255, 255, 0.9) transparent transparent transparent;
  opacity: 0.9;
  animation: orbit-glow 3.2s linear infinite;
  pointer-events: none;
}

@keyframes orbit-glow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

/* small hover boost */
.premium-rotate-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 0 0 1px rgba(247, 227, 163, 0.4),
              0 10px 26px rgba(0, 0, 0, 0.35);
}
