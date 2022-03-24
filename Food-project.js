// section navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 25) {
        nav.classList.add("scroll-on");

    }else{
        nav.classList.remove("scroll-on")
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click",function() {
       navCollapse.classList.remove("show"); 
    })
})

// counter design
document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        rang = end-start,
        increment = end > start ? 1 :-1,
        step = Math.abs(Math.floor(duration / rang)),
        timer = setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if (current == end) {
                clearInterval(timer)
            }
        }, step);
    }
    counter("count1", 0, 128, 1000);
    counter("count2", 100, 456, 500);
    counter("count3", 456, 428, 700);
    counter("count4", 77, 177, 2000);

});