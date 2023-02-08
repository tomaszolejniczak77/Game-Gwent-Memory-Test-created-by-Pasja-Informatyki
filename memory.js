let cards = [
  "ciri.png",
  "geralt.png",
  "jaskier.png",
  "jaskier.png",
  "iorweth.png",
  "triss.png",
  "geralt.png",
  "yen.png",
  "ciri.png",
  "triss.png",
  "yen.png",
  "iorweth.png",
];

const shuffledArray = cards.sort((a, b) => 0.5 - Math.random());

let c0 = document.getElementById("c0");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let c4 = document.getElementById("c4");
let c5 = document.getElementById("c5");
let c6 = document.getElementById("c6");
let c7 = document.getElementById("c7");

let c8 = document.getElementById("c8");
let c9 = document.getElementById("c9");
let c10 = document.getElementById("c10");
let c11 = document.getElementById("c11");

function myFunction(zmienna1, zmienna2) {
  zmienna1.addEventListener("click", function () {
    revealCards(zmienna2);
  });
}
myFunction(c0, 0);
myFunction(c1, 1);
myFunction(c2, 2);
myFunction(c3, 3);

myFunction(c4, 4);
myFunction(c5, 5);
myFunction(c6, 6);
myFunction(c7, 7);

myFunction(c8, 8);
myFunction(c9, 9);
myFunction(c10, 10);
myFunction(c11, 11);

let oneVisible = false;
let turnCounter = 0;
let visible_nr;
let lock = false;
let pairsLeft = 6;

function revealCards(nr) {
  let opacityCard = document.getElementById("c" + nr).style.opacity;

  if (opacityCard != 0 && lock == false) {
    lock = true;
    document.getElementById("c" + nr).style.backgroundImage =
      "url(img/" + cards[nr] + ")";

    document.getElementById("c" + nr).classList.add("cardA");

    if (oneVisible == false) {
      oneVisible = true;
      visible_nr = nr;
      lock = false;
    } else {
      if (cards[visible_nr] == cards[nr]) {
        // alert("para");
        setTimeout(function () {
          hide2Cards(nr, visible_nr);
        }, 1000);
      } else {
        // alert("pudło");
        setTimeout(function () {
          returnCards(nr, visible_nr);
        }, 1000);
      }

      turnCounter++;
      document.getElementById("score").innerHTML =
        "Turn counter: " + turnCounter;
      oneVisible = false;
    }
  }
}

let hide2Cards = (nr, visible_nr) => {
  document.getElementById("c" + nr).style.opacity = "0";
  document.getElementById("c" + visible_nr).style.opacity = "0";
  pairsLeft--;

  if (pairsLeft == 0) {
    document.getElementById("board").innerHTML =
      "<h1>You win!<br/>Done in " + turnCounter + " turns</h1>";

    document.getElementById("board").style.display = "flex";

    document.getElementById("score").style.display = "none";
    document.getElementById("rule").style.display = "none";
    document.getElementById("reload").innerHTML =
      '<div class = "reload" onclick ="location.reload()">New game ?</div>';
  }

  lock = false;
};

let returnCards = (nr, visible_nr) => {
  document.getElementById("c" + nr).style.backgroundImage =
    "url(img/karta.png)";
  document.getElementById("c" + visible_nr).style.backgroundImage =
    "url(img/karta.png)";
  document.getElementById("c" + nr).classList.remove("cardA");
  document.getElementById("c" + visible_nr).classList.remove("cardA");

  lock = false;
};
