const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

for (let i = 0; i < navbarLinks.length; i++) {
    navElemArr.push(navbarLinks[i]);
}

for (let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener("click", function () {
        elemToggleFunc(navbar);
        elemToggleFunc(overlay);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
      const header = item.querySelector('.accordion-header');
      const content = item.querySelector('.accordion-content');
      const icon = item.querySelector('.accordion-icon');

      header.addEventListener('click', () => {
        if (content.style.display === 'block') {
          content.style.display = 'none';
          icon.textContent = '+';
        } else {
          content.style.display = 'block';
          icon.textContent = '-';
        }
      });
    });
  });