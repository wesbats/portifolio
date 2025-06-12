document.addEventListener("DOMContentLoaded", () => {
  // anima carosel
  const track = document.querySelector(".carousel-stacks");
  const trackCopy = track.innerHTML;

  track.innerHTML += trackCopy + trackCopy;

  requestAnimationFrame(() => {
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
  });

  //navbar
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
    { root: null, threshold: 0.1 }
  );

  observer.observe(hero);
});
