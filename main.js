const header = document.querySelector("header");


const prt_section = document.querySelector(".portfolio");
const zoom_icons = document.querySelectorAll(".zoom-icon");
const modal_overlay = document.querySelector(".modal-overlay");
const images = document.querySelectorAll(".images img");
const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");



/*-------------Sticky Navbar-----------*/ 

function stickyNavbar(){ 
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

window.addEventListener("scroll", stickyNavbar);


/*--------------- reveal animation ----------------*/

let sr = ScrollReveal({ 
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", {delay: 600}); 
sr.reveal(".showcase-image", {origin: "top", delay: 600}); 
sr.reveal(".about-info", {delay: 600}); 
sr.reveal(".about-img", {origin: "top", delay: 600}); 
sr.reveal(".portfolio-section", {delay: 650});


/*--------------  Portfolio filter Anmation  --------------*/ 

let mixer = mixitup(".portfolio-gallary", { 
    selectors: {
        target: ".prt-card",
    }, 
    animation: { 
        duration: 500,
    },
});

/*--------------  Modal pop up Animation  --------------*/ 

let currentIndex = 0; 

zoom_icons.forEach((icn, i) => 
    icn.addEventListener("click", () => { 
    prt_section.classList.add("open");
    document.body.classList.add("stopScrolling");
    currentIndex = i;
    changeImage(currentIndex);
  })
);

modal_overlay.addEventListener("click", () => { 
    prt_section.classList.remove("open");
    document.body.classList.remove("stopScrolling"); 
});

prev_btn.addEventListener("click", () => { 
    if(currentIndex === 0) { 
        currentIndex = 5; 
    }
    else{ 
        currentIndex --;
    }
    changeImage(currentIndex);
});

function changeImage(index) { 
    images.forEach((img) => img.classList.remove("showImage")); 
    images[index].classList.add("showImage");
}
