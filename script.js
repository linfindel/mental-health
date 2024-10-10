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
    "Faith over fear",
    "Stand straight walk proud have a little faith",
    "Faith it until you make it",
    "Have a little faith don't give up",
    "Believe in yourself adn you will be unstoppable"
  ],

  "love": [
    "You are my person",
    "Sometimes thee right place is a person",
    "Mistakes are proof that you trying",
    "Be the love you never recived"
  ],
  
  "confidence": [
    "Confidence is not they will like me alot Confidenc e is i'll be fine if they don't",
    "Let your confidence shine",
    "If you dont ask the answer will always be no",
    "You were born the be real not to be perfect"
  ],
  
  "kindness": [
    "Try be the rainbow in someone else's cloud",
    "It doesn't cost anything ot be kind",
    "It takes courage to be kind"
  ],

  "peace": [
    "When you make peace wuth yourself, you make peace with the world",
    "Peace begins with a smile",
    "Peace is costly but is worth the expense",
    "Protect your peace"
  ],

  "self-control": [
    "Never let your emotions over power your intelligence",
    "Keep taking time for yourself until you're you again",
    "Be kind to your mind",
    "Self control is strength"
  ],

  "patience": [
    "To lose patience is to lose a battle",
    "Your patience is power",
    "Stay patient and trust your journey",
    "Love is patient",
    "Have patience all things are difficult before they become easy"
  ],
}

let quoteCategory;

function setCategory(category) {
  quoteCategory = quotes[category];

  document.getElementById("quote").innerText = quoteCategory[Math.floor(Math.random() * quoteCategory.length)];

  let buttons = document.getElementsByTagName('button');
  Object.values(buttons).forEach(button => button.style.backgroundColor = "rgba(255, 255, 255, 0.75)");
  
  document.getElementById(category).style.backgroundColor = "rgb(255, 255, 255)";
}