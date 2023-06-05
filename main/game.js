function generatePoem() {
  const animal = document.querySelector('input[name="animal"]:checked').value;
  const season = document.querySelector('input[name="season"]:checked').value;
  const material = document.querySelector('input[name="material"]:checked').value;

  let poem = "";
  switch (animal) {
    case "lion":
      poem += "In the jungle, I am the king,\n";
      break;
    case "butterfly":
      poem += "With wings so light, I dance in the air,\n";
      break;
    case "whale":
      poem += "In the deep blue sea, I roam without a care,\n";
      break;
  }

  switch (season) {
    case "spring":
      poem += "Amidst the flowers, I find my joy,\n";
      break;
    case "summer":
      poem += "Under the sun, I bask and enjoy,\n";
      break;
    case "autumn":
      poem += "As the leaves fall, I feel my soul deploy,\n";
      break;
  }

  switch (material) {
    case "gold":
      poem += "With a heart of gold, I shine with pride,\n";
      break;
    case "silver":
      poem += "Like a silver moon, I illuminate the night,\n";
      break;
    case "diamond":
      poem += "Like a diamond, I shine bright,\n";
      break;
  }

  alert(`Your poem:\n${poem}`);
}
