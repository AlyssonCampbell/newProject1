//keep track of score
//listen to each button, when that particular button is clicked, compare the drop-down chosen to the
//diet of the animal.  If it's a match, give a point
//once all are answered give total score
//create the questions by shuffling the animals and displaying them all in div's
//each question is "(sound)! I am a hungry (animal name), feed me..."
//loop through all of the questions, when questions are all answered then give score

document.querySelector("button").addEventListener("click", event => {
  event.preventDefault();
  console.log("button clicked!");
  let score = 0;
  let foodChoices = [];
  let animals = document.querySelectorAll(".animal");
  console.log(animals);
  for (let i = 0; i < animals.length; i++) {
    let chosenFood = animals[i].lastElementChild.value;
    console.log(chosenFood);
  }

  // console.log(food[1].value);
});
