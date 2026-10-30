window.onscroll = function() {scrollFunction()};

            function scrollFunction() {
                if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                                        
                    document.getElementById("navbar").style.padding = "30px 10px";
                } else {                    
                    document.getElementById("navbar").style.padding = "90px 10px";
                }
            }


/* ----------------------------   IA ASSISTED   ----------------------------- */
document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    dropdowns.forEach(dropdown => {
        const dropBtn = dropdown.querySelector(".dropbtn");
        
        // Facoltativo: impedisce il salto immediato al link principale se si vuole prima aprire il menu su mobile
        dropBtn.addEventListener("click", function(e) {
            if (window.innerWidth <= 768) { // Esempio per dispositivi mobili
                e.preventDefault();
                dropdown.classList.toggle("active-dropdown");
            }
        });
    });
});
/* ----------------------------   IA ASSISTED - END  ----------------------------- */