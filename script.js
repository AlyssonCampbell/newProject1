//keep track of score
//listen to each button, when that particular button is clicked, compare the drop-down chosen to the
//diet of the animal.  If it's a match, give a point
//once all are answered give total score
//create the questions by shuffling the animals and displaying them all in div's
//each question is "(sound)! I am a hungry (animal name), feed me..."
//loop through all of the questions, when questions are all answered then give score

// function getAnimalDiets() {
//   animalDiets = [];
//   for (let i = 0; i < animals.length; i++) {
//     animalDiets.push(animals[i].diet);
//   }
//   return animalDiets;
// }
//TODO:
//updates for new modal gameplay:
//when the modal is open have an event listener for the submit and display right or wrong
//once answered give option for hint of carnivore/herbivore/omnivore

document.querySelector("button").addEventListener("click", evt => {
  console.log(evt.animal.name);
})

function checkTheFood(foodChoices, score) {
  for (let i = 0; i < animalDiets.length; i++) {
    if (animalDiets[i] === foodChoices[i]) {
      score++;
    }
  }
  let results = document.getElementById("score");
  resultResponse(results, score)

}

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

function getFood() {
  foodChoices = [];
  let zookeeperChoices = document.querySelectorAll(".animal");
  for (let i = 0; i < zookeeperChoices.length; i++) {
    let chosenFood = zookeeperChoices[i].lastElementChild.value;
    foodChoices.push(chosenFood);
  }
  return foodChoices;
}