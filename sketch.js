
let numbers = []; // Array to store numbers and their categories

function setup() {
  createCanvas(600, 400);
  textSize(24);
  textAlign(CENTER, CENTER);


  
  

  // Specific numbers for each category
  let flavoredNumbers = [7,17,18,21,25,29,30,31,32,33,36,38];
  let waterNumbers = [2,5,6,8,9,10,11,12,13,14,15,16,20,22,26,28,34,35]; // Expanded for example
  let caffeineNumbers = [1,3,4,19,23,24,27,37,39]; // Expanded for example

  // 39 numbers scattered
  for (let i = 1; i <= 39; i++) {
    numbers.push({
      value: i,
      category: getCategory(i, flavoredNumbers, waterNumbers, caffeineNumbers),
      x: random(0, width),
      y: random(0, height)
    });
  }
}

function draw() {
 
  textFont('helvetica', 13);
  
  background(255);
  



  // Draw each number at its random position with category-specific color
  numbers.forEach(num => {
    fill(getColorForCategory(num.category));
    text(num.value, num.x, num.y);
  });
  
    // Text styling for the main phrase
  push()
  textFont('helvetica bold')
  textSize(34); // Smaller size for the initial part of the text
  fill('black'); // Standard text color
  textAlign(RIGHT, BOTTOM); // Align text to the bottom right
  text("am i hydrated,\nor just caffeinated?", width - 10, height - 60); // Position it with some padding from the right and bottom
pop()
   
  

}

// Determines the category based on the number
function getCategory(number, flavoredNumbers, waterNumbers, caffeineNumbers) {
  if (flavoredNumbers.includes(number)) {
    return 'flavored';
  } else if (waterNumbers.includes(number)) {
    return 'water';
  } else if (caffeineNumbers.includes(number)) {
    return 'caffeine';
  }
  return 'other'; // For numbers not explicitly categorized
}

// Returns a color based on the category
function getColorForCategory(category) {
  switch (category) {
    case 'flavored':
      return [255,105,180]; // pink
    case 'water':
      return [255, 165, 0]; // orange
    case 'caffeine':
      return [93, 63, 211]; // blue
    default:
      return [0, 0, 0]; // Black for any other category
  }
  
 

}


