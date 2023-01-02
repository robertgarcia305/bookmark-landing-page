document.addEventListener("DOMContentLoaded", ready);

function ready() {

    let bookmarkingBtn = document.getElementById("bookmarking-btn");
    let searchingBtn = document.getElementById("searching-btn");
    let sharingBtn = document.getElementById("sharing-btn");

    let bookmarkingSec = document.getElementById("bookmarking-section");
    let searchingSec = document.getElementById("searching-section");
    let sharingSec = document.getElementById("sharing-section");

    bookmarkingSec.classList.add("show-block");
    searchingSec.classList.add("hide-block");
    sharingSec.classList.add("hide-block");

    bookmarkingBtn.addEventListener("click", function() {
        if (bookmarkingBtn.className == "active") {
            

        } else {
            searchingBtn.classList.remove("active");
            bookmarkingBtn.classList.add("active");
            sharingBtn.classList.remove("active");

            searchingSec.classList.remove("show-block");
            searchingSec.classList.add("hide-block");
            
            sharingSec.classList.remove("show-block");
            sharingSec.classList.add("hide-block");
            
            bookmarkingSec.classList.remove("hide-block");
            bookmarkingSec.classList.add("show-block");
        }
    });

    searchingBtn.addEventListener("click", function() {
        if (searchingBtn.className == "active") {
            

        } else {
            bookmarkingBtn.classList.remove("active");
            searchingBtn.classList.add("active");
            sharingBtn.classList.remove("active");

            bookmarkingSec.classList.remove("show-block");
            bookmarkingSec.classList.add("hide-block");
            
            sharingSec.classList.remove("show-block");
            sharingSec.classList.add("hide-block");
            
            searchingSec.classList.remove("hide-block");
            searchingSec.classList.add("show-block");
        }
    });


    sharingBtn.addEventListener("click", function() {
        if (sharingBtn.className == "active") {
            

        } else {
            bookmarkingBtn.classList.remove("active");
            searchingBtn.classList.remove("active");
            sharingBtn.classList.add("active");

            bookmarkingSec.classList.remove("show-block");
            bookmarkingSec.classList.add("hide-block");
            
            sharingSec.classList.remove("hide-block");
            sharingSec.classList.add("show-block");
            
            searchingSec.classList.remove("show-block");
            searchingSec.classList.add("hide-block");
        }
    });
    

    //faq

    //this is for when you want the ony 1 tile open 
    const accordionTitles = document.querySelectorAll(".accordionTitle");

    // accordionTitles.forEach((accordionTitle) => {
    //     accordionTitle.addEventListener("click", () => {
    //         if (accordionTitle.classList.contains("is-open")) {
    //             accordionTitle.classList.remove("is-open");
    //         } else {
    //             const accordionTitlesWithIsOpen = document.querySelectorAll(".is-open");
    //             accordionTitlesWithIsOpen.forEach((accordionTitleWithIsOpen) => {
    //                 accordionTitleWithIsOpen.classList.remove("is-open");
    //             });
    //             accordionTitle.classList.add("is-open");
    //         }
    //     });
    // });
    

    //for when you want all of them to open up
    // accordionTitles.forEach((accordionTitle) => {
    //     accordionTitle.addEventListener("click", () => {
    //         if (accordionTitle.classList.contains("is-open")) {
    //             accordionTitle.classList.remove("is-open");
    //         } else {
    //             accordionTitle.classList.add("is-open");
    //         }
    //     });
    // });


    //another version
    accordionTitles.forEach((accordionTitle) => {
        accordionTitle.addEventListener("click", () => {
            if (accordionTitle.classList.contains("is-open")) {
                accordionTitle.classList.remove("is-open");
            } else {
                accordionTitle.classList.add("is-open");
            }
        });
    });



    //nav

    let hamb = document.getElementById("hamb-icon");
    let x = document.getElementById("x-icon");
    let nav = document.getElementById("nav");

    show = () => {
        nav.style.display = "block";
        x.style.display = "block";
        hamb.style.display = "none";
    }
      
    hide = () => {
        nav.style.display = "none";
        x.style.display = "none";
        hamb.style.display = "block";
    }

    hamb.addEventListener("click", show);
    x.addEventListener("click", hide);

}