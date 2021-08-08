const quotes = [
  {
    quote: "Planck constant", 
    author: "h = 1.05457✕10^-34 Js"
  }, 
  {
    quote: "Speed of light", 
    author: "c = 2.99792✕10^8 m/s"
  }, 
  {
    quote: "Mass of electron", 
    author: "me = 9.10938✕10^-31 kg"
  }, 
  {
    quote: "Mass of proton", 
    author: "mp = 1.67262✕10^-27 kg"
  }, 
  {
    quote: "Elementary charge", 
    author: "e = 1.60218✕10^-19 C"
  }, 
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;