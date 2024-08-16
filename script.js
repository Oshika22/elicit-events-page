
console.log("works")
var x = document.getElementById("Elicit");
var y = document.getElementById("Rte");
var z = document.getElementById("btn");

// gsap.to("#Rte",{
//     x: "100vw",
// })
function callRTE() {
    
    // x.style.left = "-10000px";
    z.style.left = "100px";
    // y.style.left = "10px";

    gsap.to("#Elicit",{
        x: "-100vw",
    })
    gsap.to("#Rte",{
        x: "0",
    })
}

function callElicit() {
    z.style.left = "0px";
    // x.style.left = "10px";
    // y.style.left = "450px";
    
    gsap.to("#Elicit",{
        x: "0",
    })
    gsap.to("#Rte",{
        x: "100vw",
    })
}


// RTE Animations 

let rteEc = document.querySelectorAll(".rte-ec");

rteEc.forEach((ec) => {
    
    ec.addEventListener("mouseenter", () => {
        gsap.to(".circles-top",{
            height: "50%",
            width: "100%",
            borderRadius: "0",
            opacity: 0,
        })
        gsap.to(".circles-bottom",{
            height: "50%",
            width: "100%",
            borderRadius: "0",
            opacity: 0,
        })
        gsap.to(".circles-bottom-small",{
            scale: 0,
        })
        gsap.to(".circles-top-small",{
            scale: 0,
        })
        gsap.to(".rte-post",{
            opacity: 0,
            delay: 0.5,
        })
    })

    ec.addEventListener("mouseleave", () => {
        gsap.to(".rte-post",{
            opacity: 1,
        })
        
        gsap.to(".circles-top",{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            opacity: 1,
        })
        gsap.to(".circles-bottom",{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            opacity: 1,
        })
        gsap.to(".circles-bottom-small",{
            scale: 1,
        })
        gsap.to(".circles-top-small",{
            scale: 1,
        })
    })
})
