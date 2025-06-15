document.addEventListener("DOMContentLoaded", () => {
  startCarousel();
  enableNavbar();
  enableAbout();
});

function startCarousel() {
  const track = document.querySelector(".carousel-stacks");
  const trackCopy = track.innerHTML;

  track.innerHTML += trackCopy + trackCopy;

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      setTimeout(() => {
        const stacks = track.querySelectorAll(".stack");
        const gap = parseFloat(getComputedStyle(track).gap);
        let totalWidth = 0;
        stacks.forEach((stack) => {
          totalWidth += stack.offsetWidth + gap;
        });

        totalWidth /= 3;
        track.style.setProperty("--scrollWidth", `${totalWidth}px`);
        const speed = totalWidth / 30;
        track.style.animationDuration = `${speed}s`;
      }, 0);
    });
  });
}

function enableNavbar() {
  const nav = document.querySelector("nav");
  const hero = document.querySelector(".hero");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        nav.classList.remove("fixed");
      } else {
        nav.classList.add("fixed");
      }
    },
    { root: null, threshold: 0 }
  );

  observer.observe(hero);
}

function enableAbout() {
  document.querySelectorAll(".accordion .title").forEach((title) => {
    title.addEventListener("click", () => {
      const item = title.parentElement;
      const isActive = item.classList.contains("active");

      document.querySelectorAll(".accordion li").forEach((li) => {
        li.classList.remove("active");
      });

      if (!isActive) {
        item.classList.add("active");
      }
    });
  });
}
