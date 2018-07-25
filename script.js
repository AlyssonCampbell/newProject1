//makes an array from the animals array of all of the diets to compare against
function getAnimalDiets() {
  animalDiets = [];
  for (let i = 0; i < animals.length; i++) {
    animalDiets.push(animals[i].diet);
  }
  return animalDiets;
}
//checks the items within the foods chosen by the player against the animal diets to determine score
function checkTheFood(foodChoices, score) {
  for (let i = 0; i < animalDiets.length; i++) {
    if (animalDiets[i] === foodChoices[i]) {
      score++;
    }
  }
  let results = document.getElementById("score");
  resultResponse(results, score)
}
//gives the results with messages based on the score achieved
function resultResponse(results, score) {
  let response = `You got ${score} out of ${animalDiets.length} correct!`
  if (score < 6) {
    results.innerHTML = response + " Nice try! play again?"
  } else if (score < 10 && score > 6) {
    results.innerHTML = response + " Good Job!"
  } else {
    results.innerHTML = response + " Wow! You know your animals!"
  }
}
//creates an array containing all of the player-submitted choices from the dom
function getFood() {
  foodChoices = [];
  let zookeeperChoices = document.querySelectorAll(".animal");
  for (let i = 0; i < zookeeperChoices.length; i++) {
    let chosenFood = zookeeperChoices[i].lastElementChild.value;
    foodChoices.push(chosenFood);
  }
  return foodChoices;
}
//event listener to run the above functions when the submit button is clicked
document.querySelector("button").addEventListener("click", event => {
  event.preventDefault();
  let score = 0;
  getAnimalDiets();
  getFood();
  checkTheFood(foodChoices, score);
});