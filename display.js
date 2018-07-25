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
  makePicture(i);
  animalDivs.appendChild(animalPics);
}

function makePicture(i) {
  animalPics = document.createElement("img");
  animalPics.setAttribute("src", `img/${animals[i].name}.png`)
  animalPics.setAttribute("alt", `${animals[i].name}`)
}

window.addEventListener("load", () => {
  let animalPictures = document.querySelectorAll("img")
  for (let i = 0; i < animalPictures.length; i++) {
    animalPictures[i].addEventListener("click",
      event => {
        let modal = document.getElementById("animalModal");
        modal.style.display = "block";
        let displayAnimal = document.querySelector(".modalPic");
        makePicture(i);
        displayAnimal.appendChild(animalPics);
        let displayName = document.querySelector(".animalName")
        displayName.innerHTML = (animals[i].name);
      })
  }
})

let span = document.getElementsByClassName("close")[0];

span.addEventListener("click", event => {
  document.querySelector(".modalPic").innerHTML = ""
  animalModal.style.display = "none";
});