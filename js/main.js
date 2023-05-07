function toggleMenu(){
    let toggleMenu = document.getElementById("toggleMenu");
    let collpseMenu = document.getElementById("collpseMenu");
    toggleMenu.addEventListener("click", function(){
        collpseMenu.classList.toggle("open");
    });

}

function loadSplide() {
    let _splide = new Splide(".splide", {
      type: "loop",
      arrows: false,
      mediaQuery: "min",
      gap: "1rem",
      breakpoints: {
        1200: {
          padding: { left: "2rem", right: "2rem" },
        },
        1300: {
          padding: { left: "0", right: "0" },
        },
      },
    }).mount();
  }

  toggleMenu();
  loadSplide();