// ================================================================
// AARAMBH-AI — TEAM 7 SUBMISSION WEBSITE
// Add your actual Google Drive, PowerPoint and demo video URLs below.
// Keep the GitHub URL updated if your repository changes.
// ================================================================

const submissionLinks = {
  github: "https://github.com/BharathKumarBD/Employee-Onboarding",
  resumesDrive: "https://drive.google.com/drive/folders/187lcfyREAFGuro173ZYSirEIvKaNl-8C?usp=sharing",
  presentation: "https://docs.google.com/presentation/d/19mPbSWuXBwLdqRo6fNJOaOCLCghvnjDd/edit?usp=sharing&ouid=100972528518452797412&rtpof=true&sd=true",
  demoVideo: "PASTE_DEMO_VIDEO_LINK_HERE"
};

const linkElements = {
  github: document.getElementById("githubLink"),
  resumesDrive: document.getElementById("resumeLink"),
  presentation: document.getElementById("pptLink"),
  demoVideo: document.getElementById("videoLink")
};

Object.entries(linkElements).forEach(([key, element]) => {
  const url = submissionLinks[key];
  if (!element) return;

  if (url && !url.startsWith("PASTE_")) {
    element.href = url;
    element.classList.remove("is-unconfigured");
  } else {
    // Prevent placeholder cards from navigating to an empty page.
    element.href = "#";
    element.classList.add("is-unconfigured");
    element.addEventListener("click", (event) => {
      event.preventDefault();
      alert("This resource link has not been added yet. Please update it in script.js.");
    });
  }
});

// Mobile navigation
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle?.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
    if (menuToggle) menuToggle.textContent = "☰";
  });
});

// Reveal sections as they enter the viewport
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}
