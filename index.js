document.addEventListener("DOMContentLoaded", ready);

function ready() {

    let x = document.getElementById("x-icon");
    let hamb = document.getElementById("hamb-icon");
    let nav = document.getElementById("nav");


    nav.style.display = "none";
    openClose = () => {
        if (nav.style.display == "none") {
            nav.style.display = "flex";
            hamb.style.display = "none";
            x.style.display = "block";
        } else {
            nav.style.display = "none";
            hamb.style.display = "block";
            x.style.display = "none";
        }
    }

    x.addEventListener("click", openClose);
    hamb.addEventListener("click", openClose);

}