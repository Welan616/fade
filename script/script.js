const menuBtn = document.querySelector('.menu-icon');
const ddContent = document.querySelector('.dd-content');
console.log(ddContent)
menuBtn.onclick = () => {
    ddContent.classList.toggle('show-dd-content');
};

const serviceRow = document.querySelectorAll('.service-row');
// console.log(serviceRow1);

serviceRow.forEach(element => {
    element.addEventListener('mouseover', () => {
      // Code to execute when the mouse hovers over the element
      element.style.transform = 'scale(1.1)'; // Scale up the element
    });
  
    element.addEventListener('mouseout', () => {
      // Code to execute when the mouse leaves the element
      element.style.transform = 'scale(1)'; // Reset the element's scale
    });
  });