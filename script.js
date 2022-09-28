const nav = document.querySelector("nav");
const topOfNav = nav.offsetTop;
function fixNav() {
  console.log(topOfNav);
}

window.addEventListener("scroll", fixNav);
