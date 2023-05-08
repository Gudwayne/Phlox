const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');
const clowz = document.getElementById('clowz');

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
};
clowz.onclick = function (){
    dropDownMenu.classList.toggle('open');
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 200) {
        backToTopButton.classList.add("visible");
    } else {
        backToTopButton.classList.remove("visible");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// const about = document.getElementsByClassName("action-btn");
// about.addEventListener("click", () => {
//     window.scrollTo({
//         behavior: "smooth"
//     });
// });

$(document).ready(function () {
    $('a[href^="#"]').on('click', function (event) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 700);
        }
    });
});


const droptops = document.querySelectorAll('[id^="the"]');
droptops.forEach(function (droptop) {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 900) {
            droptop.style.color = "black";

            droptop.addEventListener('mouseover', function () {
                this.style.color = 'yellow';
            });
            droptop.addEventListener('mouseout', function () {
                if (window.pageYOffset > 900) {
                    this.style.color = 'black';
                } else {
                    droptop.style.color = "white";
                }
            });

        } else {
            droptop.style.color = "white";
        }
    });

});

const sneek = document.getElementById('sneek');
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      sneek.style.display = 'none';
    } else {
      sneek.style.display = 'flex';
    }
  });