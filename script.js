// ===== TYPEWRITER =====
const roles = [
    "Java • Spring Boot • Microservices",
    "Cloud • Kubernetes • CI/CD",
    "Data Pipelines • Kafka • SQL/NoSQL"
  ];
  const typedEl = document.getElementById("typed");
  let ridx = 0, cidx = 0, deleting = false;
  
  function typeLoop() {
    const word = roles[ridx];
    if (!deleting) {
      typedEl.textContent = word.slice(0, ++cidx);
      if (cidx === word.length) { deleting = true; setTimeout(typeLoop, 1200); return; }
    } else {
      typedEl.textContent = word.slice(0, --cidx);
      if (cidx === 0) { deleting = false; ridx = (ridx + 1) % roles.length; }
    }
    setTimeout(typeLoop, deleting ? 40 : 60);
  }
  typeLoop();
  
  // ===== REVEAL ON SCROLL =====
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  
  // ===== THEME TOGGLE =====
  const themeToggle = document.getElementById("themeToggle");
  function setTheme(mode) {
    document.documentElement.classList.toggle("light", mode === "light");
    localStorage.setItem("theme", mode);
    themeToggle.textContent = mode === "light" ? "🌙" : "☀️";
  }
  const saved = localStorage.getItem("theme");
  if (saved) { setTheme(saved); } else { setTheme("dark"); }
  themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    const light = document.documentElement.classList.contains("light");
    setTheme(light ? "dark" : "light");
  });
  
  // ===== YEAR =====
  document.getElementById("year").textContent = new Date().getFullYear();
  