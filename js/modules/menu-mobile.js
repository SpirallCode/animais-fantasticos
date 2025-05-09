import outsideClick from "./outsideclick.js";

export default function initiMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  function openMenu(event) {
    menuList.classList.add("active");
    menuButton.classList.add("active");
    outsideClick(menuList, ["click", "touchstart"], () => {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    });
  }

  if (menuButton) {
    menuButton.addEventListener("click", openMenu);
  }
}
