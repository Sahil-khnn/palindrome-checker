const textArea = document.querySelector(".input input");
const checkBtn = document.querySelector(".input button");
const infoTxt = document.querySelector(".info-txt");
let filterTxt;

checkBtn.addEventListener("click", () => {
  let reverseTxt = filterTxt.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (reverseTxt != filterTxt) {
    return (infoTxt.innerHTML = `No ${textArea.value} is not a palindrome`);
  }
  infoTxt.innerHTML = `Yes ${textArea.value} is a palindrome`;
});

textArea.addEventListener("keyup", () => {
  filterTxt = textArea.value.toLowerCase().replace(/[^A-Z0-9]/gi, "");
  if (filterTxt) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
  infoTxt.style.display = "none";
});
