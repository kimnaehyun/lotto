const liEl = document.querySelectorAll("li");

function pickNumber() {
  let numArray = [];
  while (1) {
    const randomNumber = Math.ceil(Math.random() * 45);
    for (let i = numArray.length - 1; i < numArray.length; i++) {
      numArray.push(randomNumber);
      if (numArray[i] === randomNumber) {
        numArray.pop();
      }
    }
    if (numArray.length === 6) {
      break;
    }
  }
  const numArraySort = numArray.sort((a, b) => a - b);
  for (let j = 0; j < numArraySort.length; j++) {
    liEl[j].textContent = numArraySort[j];
  }
}
