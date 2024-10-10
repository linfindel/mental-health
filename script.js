const quotes = {
  "hope": [
    "Hope is being able to see that there is light despite all of the darkness",
    "Never give up hope",
    "Fear never builds the future but hope does",
    "To plant a garden is to believe in tomorrow",
    "Hope heals old wounds",
    "You're gonna go far",
    "Give yourself a reason"
  ],

  "faith": [

  ],

  "love": [

  ],
  
  "confidence": [

  ],
  
  "kindness": [

  ]
}

let quoteCategory;

function setCategory(category) {
  quoteCategory = quotes[category];

  document.getElementById("quote").innerText = quoteCategory[Math.floor(Math.random() * quoteCategory.length)];

  let buttons = document.getElementsByTagName('button');
  Object.values(buttons).forEach(button => button.style.backgroundColor = "rgba(255, 255, 255, 0.75)");
  
  document.getElementById(category).style.backgroundColor = "rgb(255, 255, 255)";
}