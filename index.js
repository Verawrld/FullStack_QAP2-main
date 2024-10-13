const express = require("express");
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true })); // For parsing form data
app.use(express.static("public")); // To serve static files (e.g., CSS)

//Some routes required for full functionality are missing here. Only get routes should be required

let leaderboard = [];

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/quiz", (req, res) => {
  const question = getQuestion();
  const streak = req.query.streak ? parseInt(req.query.streak) : 0;
  res.render("quiz", { question, result: null, streak });
});

//Handles quiz submissions.
app.post("/quiz", (req, res) => {
  const { answer, question, streak } = req.body;
  const isCorrect = isCorrectAnswer(question, answer);
  const newQuestion = getQuestion();
  let newStreak = parseInt(streak);

  if (isCorrect) {
    newStreak += 1;
    res.render("quiz", {
      question: newQuestion,
      result: "Correct! Here's a new question:",
      streak: newStreak,
    });
  } else {
    newStreak = 0; // Reset streak on incorrect answer
    res.render("quiz", {
      question: newQuestion,
      result: "Incorrect. Try again or return to the menu.",
      streak: newStreak,
    });
  }
  //answer will contain the value the user entered on the quiz page
  //Logic must be added here to check if the answer is correct, then track the streak and redirect properly
  //By default we'll just redirect to the homepage again.
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
