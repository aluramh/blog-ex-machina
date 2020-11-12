export function setCookie(name: string, value, daysBeforeExpire: number = 365) {
  var d = new Date();
  d.setTime(d.getTime() + daysBeforeExpire * 24 * 60 * 60 * 1000);
  var expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

export function getCookie(cookieName: string): any {
  var name = cookieName + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(";");

  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

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
