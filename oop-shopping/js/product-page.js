const getBackBtn = document.querySelector("#get-back");

window.addEventListener("DOMContentLoaded", () => {
  getBackBtn.addEventListener("click", () => history.back());
});
