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

const quoteCategory = quotes[Math.floor(Math.random() * quotes.length)];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];