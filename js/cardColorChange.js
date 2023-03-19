let cardColor = document.getElementsByClassName("cardColor");
// console.log(card[0]);
for (let i = 0; i < cardColor.length; i++) {
  console.log(cardColor[i]);
  cardColor[i].addEventListener("mouseover", function () {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    //   console.log({ r, g, b });
    document.getElementsByClassName("cardColor")[i].style.backgroundColor =
      "rgba(" + r + "," + g + "," + b + ")";
  });
  cardColor[i].addEventListener("mouseout", function () {
    document.getElementsByClassName("cardColor")[i].style.backgroundColor =
      "white";
  });
}
