const listItem = document.querySelectorAll("nav ul li a");
const menuBackDrop = document.querySelector("#menu-backdrop");

export const showMenuOnHover = () => {
  const styleMenu = menuBackDrop.style;
  listItem.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const { left, top, width, height } = item.getBoundingClientRect();
      styleMenu.setProperty("--left", `${left}px`);
      styleMenu.setProperty("--top", `${top}px`);
      styleMenu.setProperty("--width", `${width}px`);
      styleMenu.setProperty("--height", `${height}px`);
      styleMenu.opacity = "1";
      styleMenu.visibility = "visible";
    });

    item.addEventListener("mouseleave", () => {
      styleMenu.opacity = "0";
      styleMenu.visibility = "hidden";
    });
  });
};
