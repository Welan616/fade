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
