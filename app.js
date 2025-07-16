// Bible verses with missing words (format: { verse: "...", reference: "...", blank: "word" })
const verses = [
  {
    verse: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16",
    blank: "loved"
  },
  {
    verse: "I can do all things through Christ who strengthens me.",
    reference: "Philippians 4:13",
    blank: "Christ"
  },
  {
    verse: "The Lord is my shepherd, I lack nothing.",
    reference: "Psalm 23:1",
    blank: "shepherd"
  }
];

let currentVerse;
let score = 0;

// Initialize the quiz
function init() {
  currentVerse = verses[Math.floor(Math.random() * verses.length)];
  displayVerse();
}

// Display the verse with a blank
function displayVerse() {
  const verseText = currentVerse.verse.replace(
    currentVerse.blank,
    "<span class='blank'>______</span>"
  );
  document.getElementById("verse").innerHTML = `
    <p>${verseText}</p>
    <p><em>${currentVerse.reference}</em></p>
  `;
}

// Check the user's answer
function checkAnswer() {
  const userGuess = document.getElementById("userGuess").value.trim();
  const feedbackEl = document.getElementById("feedback");

  if (userGuess.toLowerCase() === currentVerse.blank.toLowerCase()) {
    feedbackEl.textContent = "Correct! Well done!";
    feedbackEl.style.color = "green";
    score++;
    document.getElementById("score").textContent = score;
    setTimeout(() => {
      init(); // Load next verse
      document.getElementById("userGuess").value = "";
      feedbackEl.textContent = "";
    }, 1500);
  } else {
    feedbackEl.textContent = "Try again!";
    feedbackEl.style.color = "red";
  }
}

// Start the quiz
init();