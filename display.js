function makeGame() {
  let game = document.querySelector(".game");
  for (let i = 0; i < animals.length; i++) {
    let animalDivs = document.createElement("div")
    animalDivs.setAttribute("class", `animal ${animals[i].name}`);
    game.appendChild(animalDivs);
    addPictures(i, animalDivs);
  }
}
makeGame();

function addPictures(i, animalDivs) {
  let animalPics = document.createElement("img");
  animalPics.setAttribute("src", `img/${animals[i].name}.png`)
  animalPics.setAttribute("alt", `${animals[i].name}`)
  animalDivs.appendChild(animalPics);
}