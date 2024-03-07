const theme = document.querySelectorAll(".toggle-theme");
const submenu = document.querySelector("#submenu-handle");
const mobileSubmenuBtn = document.querySelector(".mobileSubmenu-btn-open");
// const querySearch = document.querySelector("#quickSearch");

// functions //
// To remove and add a class specifically to an element
const toggleClass = (removeClass, addClass, target) => {
  // -1 : get element by id or classname or ...
  const element = document.querySelector(target);
  // -2: remove class from target
  element.classList.remove(removeClass);
  // -3:add class to target
  element.classList.add(addClass);
};

const closeModalHandle = (closeBtn, removeClass, addClass, target) => {
  const button = document.querySelector(closeBtn);
  button.addEventListener("click", () => {
    toggleClass(removeClass, addClass, target);
    toggleClass("showOverlay", "hideOverlay", "#overlay");
  });
};

const showModalHandle = (openBtn, removeClass, addClass, target) => {
  const button = document.querySelector(openBtn);
  button.addEventListener("click", () => {
    toggleClass(removeClass, addClass, target);
    toggleClass("hideOverlay", "showOverlay", "#overlay");
  });
  // hide overlay with click
};

// functions //

// for toggle theme
for (const node of theme) {
  node.addEventListener("click", () => {
    if (localStorage.theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

// for handle submenu height
// if (submenu.clientHeight > 500) {
//   submenu.style.maxHeight = "500px";
//   submenu.style.overflowY = "auto";
// } else {
//   submenu.style.overflowY = "hidden";
// }

// for show and hidden submenu in mobile :
mobileSubmenuBtn.addEventListener("click", () => {
  document
    .querySelector(".mobileSubmenu")
    .classList.toggle("mobileSubmenu_open");
});

// show nav menu + overlay in mobile :
showModalHandle(".navIcon", "-right-64", "right-0", ".navMenu");

// hidden nav menu + overlay in mobile :
closeModalHandle(".nav-clseBtn", "right-0", "-right-64", ".navMenu");

// for show shopping modal + overlay
showModalHandle(
  ".cartShoppingOpenBtn",
  "-left-64",
  "left-0",
  ".cartShoppingModal"
);

//for hide shopping modal + overlay
closeModalHandle(
  ".cartShopping-closeBtn",
  "left-0",
  "-left-64",
  ".cartShoppingModal"
);

//////

// console.log(quickSearchData)

// for (const item of quickSearchData) {
//   console.log(item)
//   const link = document.createElement("a");
//   link.classList.add("");
//   link.innerHTML = item.title;

//   querySearch.appendChild(link);
// }

//

const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 0) {
    header.classList.add("bg-white");
  } else {
    header.classList.remove("bg-white");
  }
});

console.log("first");
