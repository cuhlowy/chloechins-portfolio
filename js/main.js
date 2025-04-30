document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".nav-links");
  
    toggle.addEventListener("click", function () {
      toggle.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".popup-image");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        const overlay = document.createElement("div");
        overlay.classList.add("lightbox-overlay");
  
        const fullImg = document.createElement("img");
        fullImg.src = img.src;
  
        overlay.appendChild(fullImg);
        document.body.appendChild(overlay);
        overlay.style.display = "flex";
  
        overlay.addEventListener("click", () => {
          overlay.remove();
        });
  
        document.addEventListener("keydown", function handler(e) {
          if (e.key === "Escape") {
            overlay.remove();
            document.removeEventListener("keydown", handler);
          }
        });
      });
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".filter-buttons button");
    const projects = document.querySelectorAll(".portfolio-grid a");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");
  
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
  
        projects.forEach(project => {
          const category = project.getAttribute("data-category");
  
          if (filter === "all" || category === filter) {
            project.style.display = "block";
          } else {
            project.style.display = "none";
          }
        });
      });
    });
  });
  
