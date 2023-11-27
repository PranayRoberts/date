const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const backBtn = document.querySelector(".back-btn")

yesBtn.addEventListener("click", () => {
  yesBtn.style.display = "none";
  noBtn.style.display = "none"
  backBtn.style.display = "block"
  question.innerHTML = "Yay, Can't wait!";
  gif.src ="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXFqem95dGFuMXNpYWhuNHkyY3FndnA1Ync0dW1hbmtmYmZoOTJmaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/R6gvnAxj2ISzJdbA63/giphy-downsized-large.gif";

  backBtn.addEventListener("click", () => {
    location.reload();
  });
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});