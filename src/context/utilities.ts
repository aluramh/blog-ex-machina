/**
 * "Cheap" way to turn on dark mode
 */
export function comeToTheDarkside() {
  document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
  document.body
    .querySelectorAll("img, picture, video")
    // @ts-ignore
    .forEach((el) => (el.style.filter = "invert(1) hue-rotate(180deg)"));
}
