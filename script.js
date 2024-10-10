const quotes = {
  hope: [
    "Hope is being able to see that there is light despite all of the darkness",
    ""
  ],

  faith: [

  ],

  love: [

  ],
  
  confidence: [

  ],
  
  kindness: [

  ]
}

const quoteCategories = [
  "hope",
  "faith",
  "love",
  "confidence",
  "kindness"
]

const quoteCategory = quoteCategories[Math.floor(Math.random() * quoteCategories.length)];

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];