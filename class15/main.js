import { CookieUtil } from "./libs/cookieUtil.js";

document.cookie = "name=John Doe";
document.cookie = "memberType=premium";
document.cookie = "color=blue;max-age=60";
document.cookie = `color=blue;expires=${new Date(
  "December 17, 2022 00:21:00"
)}`;

const cookieName = encodeURIComponent("uri:scheme");
const cookieValue = encodeURIComponent("https://helloworldfennec.vercel.app");

console.log("Encoded cookie name");
console.log(cookieName);
console.log(cookieValue);

console.log("Decoded cookie name");
console.log(decodeURIComponent(cookieName));
console.log(decodeURIComponent(cookieValue));

CookieUtil.set("member", "premium");
CookieUtil.set(
  "uri:scheme",
  "https://helloworldfennec.vercel.app",
  new Date("December 17, 2022 00:21:00")
);
console.log(CookieUtil.get("member"));
CookieUtil.unset("member");

let visit = localStorage.getItem("visit");

if (!visit) {
  localStorage.setItem("visit", "1");
} else {
  localStorage.setItem("visit", parseInt(visit) + 1);
}

console.log(
  `You have visited this page ${localStorage.getItem("visit")} times.`
);

// before unload
window.addEventListener("beforeunload", (event) => {
  localStorage.setItem("visit", "0");
});
