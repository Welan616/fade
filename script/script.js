const menuBtn = document.querySelector("#menu-icon");
const ddContent = document.querySelector(".dd-content");

menuBtn.onclick = () => {
    ddContent.classList.toggle("show-dd-content");
};

const serviceRows = document.querySelectorAll(".service-row");

serviceRows.forEach(element => {
  element.addEventListener("mouseover", () => {
    element.style.transition = "transform 0.3s ease-in-out"; // Add transition
    element.style.transform = "scale(1.1)";
  });

  element.addEventListener("mouseout", () => {
    element.style.transition = "transform 0.3s ease-in-out"; // Add transition
    element.style.transform = "scale(1)";
  });
});


function openEmailApp() {
  const mailtoLink = `mailto:bleboylawson@gmail.com?subject=My Subject&body=My Message`;
  const deviceAgent = navigator.userAgent || navigator.vendor;

  // Android devices
  if (/android/i.test(deviceAgent)) {
    window.location.href = mailtoLink;
  }

  // iOS devices
  if (/iphone|ipad/i.test(deviceAgent)) {
    const locationHref = encodeURI(mailtoLink);
    window.location.href = `intent://${locationHref}#Intent;scheme=mailto;package=com.apple.mobilesafari;end`;
  }
}