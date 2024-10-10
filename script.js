const quotes = [
  "you are good",
  "you are not bad"
]

document.getElementById("quote").innerText = quotes[Math.floor(Math.random() * quotes.length)];