document.querySelector("textarea").addEventListener("input", function (e) {
  let maxiLength = 400;
  let WordstobeTaken = Number(this.value.length);
  console.log(this.value.length);
  let WordsRemaing = maxiLength - WordstobeTaken;
  let spanManipluate = document.querySelector("span");

  if (WordsRemaing === 400) {
    spanManipluate.classList.add("hide");
  } else {
    spanManipluate.classList.remove("hide");
    spanManipluate.textContent = `You have ${WordsRemaing} Remaining`;
  }
});
