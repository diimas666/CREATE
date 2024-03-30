document.addEventListener('DOMContentLoaded', function(){

    document.querySelector(".h1-header").classList.toggle("h1-header_active", true);
    document.querySelector(".btn-head").classList.toggle("btn-head_active", true);
    document.querySelector(".logo").classList.toggle("logo_active", true);   


    // hanburger 
    const hamburger = document.querySelector('.hamburger');
    const links = document.querySelector('.menu');

        function clickHamburger() {
            hamburger.addEventListener("click", function() {
                links.classList.toggle('menu_active');
            });

            document.addEventListener("click", function(event) {
                const isClickInsideHamburger = hamburger.contains(event.target);
                const isClickInsideLinks = links.contains(event.target);

                if (!isClickInsideHamburger && !isClickInsideLinks) {
                    links.classList.remove('menu_active');
                }
            });
        }

clickHamburger();

 // hanburger КОНЕЦ 
//  наблюдатель за секциями 

const allSections = document.querySelectorAll(".section");

function revealSection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove("section--hidden");
            observer.unobserve(entry.target);
        }
    });
}

const sectionObserver = new IntersectionObserver(revealSection, { threshold: 0.15 });

allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add("section--hidden"); // Правильно написано "section--hidden"
});

// конец  наблюдатель за секциями 
});