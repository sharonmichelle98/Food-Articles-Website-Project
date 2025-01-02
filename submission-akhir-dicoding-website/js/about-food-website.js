let slideFirstNumber = 1;
let firstArticles = document.getElementsByClassName("terbaru-article-column");
let firstDots = document.getElementsByClassName("first-dot");
showFirstArticles(slideFirstNumber);

function clickFirstSlide(a) {
  showFirstArticles(slideFirstNumber = a);
}

function showFirstArticles(a) {
  let i;
  if (a > firstArticles.length) {slideFirstNumber = 1}
  if (a < 1) {slideFirstNumber = firstArticles.length}
  for (i = 0; i < firstArticles.length; i++) {
    firstArticles[i].style.display = "none";
  }
  for (i = 0; i < firstDots.length; i++) {
    firstDots[i].className = firstDots[i].className.replace("active", "");
  }
  firstArticles[slideFirstNumber-1].style.display = "block";
  firstDots[slideFirstNumber-1].className += "active";
}

let slideSecondNumber = 1;
let secondArticles = document.getElementsByClassName("menu-article-column");
let secondDots = document.getElementsByClassName("second-dot");
showSecondArticles(slideSecondNumber);

function clickSecondSlide(b) {
  showSecondArticles(slideSecondNumber = b);
}

function showSecondArticles(b) {
  let j;
  if (b > secondArticles.length) {slideSecondNumber = 1}
  if (b < 1) {slideSecondNumber = secondArticles.length}
  for (j = 0; j < secondArticles.length; j++) {
    secondArticles[j].style.display = "none";
  }
  for (j = 0; j < secondDots.length; j++) {
    secondDots[j].className = secondDots[j].className.replace("active", "");
  }
  secondArticles[slideSecondNumber-1].style.display = "block";
  secondDots[slideSecondNumber-1].className += "active";
}