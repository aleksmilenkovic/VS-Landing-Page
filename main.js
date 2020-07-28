const toggleButton = document.getElementsByClassName("hero__burger-button")[0];
const links = document.getElementsByClassName("hero__navlist")[0];

toggleButton.addEventListener("click", () => {
  links.classList.toggle("active");
  console.log('button clicked')
});
