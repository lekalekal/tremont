// Animation lors du scroll disparition de la nav et +
const ScrollAnimation = () => {
    let posScrollPre = window.pageYOffset;
    window.onscroll = function () {
        let posScrollNow = window.pageYOffset;

        if (posScrollPre > posScrollNow) {
            document.querySelector("nav").style.top = 0;
        } else {
            document.querySelector("nav").style.top = "-100px";
            document.querySelector(".title-container").style.opacity = '0';
        }
        if (posScrollNow == 0) {
            document.querySelector(".title-container").style.opacity = '1';
        }

        posScrollPre = posScrollNow;
    }
}

// FADE IN AND OUT ANIMATION
const FadeOut = () => {
    window.onload = () => {
        const transition = document.querySelector('.transition')
        const navLinks = document.querySelectorAll('nav a')

        setTimeout(() => {
            transition.classList.remove('active');
        }, 500);

        for (let i = 0; i < navLinks.length; i++) {
            const navLink = navLinks[i];
            // console.log(navLink);

            navLink.addEventListener('click', (e) => {
                e.preventDefault();
                let target = e.target.href;
                transition.classList.add('active');

                setTimeout(() => {
                    window.location.href = target;
                }, 500);
            })
        }
    }
};




const app = () => {
    ScrollAnimation();
    FadeOut();
}

app();

// menu burger

var Burger = document.querySelector(".menu-burger");
var Main_nav = document.querySelector("nav");

Burger.addEventListener("click",function(){
Burger.classList.toggle("active");
Main_nav.classList.toggle("active");
});
