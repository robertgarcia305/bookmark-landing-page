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
    let accordionTop = document.getElementsByClassName("accordion-top");
    let accordionInfo = document.getElementsByClassName("accordion-info");

    // for (let i = 0; i < accordionTop.length; i++) {
    //     for (let i = 0; i < accordionInfo.length; i++) {
    //         accordionTop[i].addEventListener("click", function() {
    //             if (accordionTop[i].className == "activate") {
    //                 accordionInfo[i].classList.remove("active-show");
    //                 accordionInfo[i].classList.add("active-hide");
    //                 accordionTop[i].classList.remove("activate");
    //             } else {
    //                 accordionInfo[i].classList.add("active-show");
    //                 accordionInfo[i].classList.remove("active-hide");
    //                 accordionTop[i].classList.add("activate");
    //             }
    //         }   
    //     )};
    // }

    for (let i = 0; i < accordionTop.length; i++) {
        for (let i = 0; i < accordionInfo.length; i++) {
            accordionTop[i].addEventListener("click", function() {
                
            }   
        )};
    }
    toggle = () => {//when its a toggle, you need to specify in each condition the styling also
        if (p.style.opacity == "1" ) {
            p.classList.add("close");
            p.classList.remove("open");
            p.style.opacity = "0";
        } else {
            p.classList.add("open");
            p.classList.remove("close");
            p.style.opacity = "1";
        }
    }
    

}