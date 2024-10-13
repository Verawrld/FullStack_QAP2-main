/**
 * Gets a random multiplication, division, subtraction or addition question
 *
 * @returns {string} The randomly generated math question
 */
function getQuestion() {
  const operations = ["+", "-", "*", "/"];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const operation = operations[Math.floor(Math.random() * operations.length)];

  let question;
  switch (operation) {
    case "+":
      question = `${num1} + ${num2}`;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      break;
    case "/":
      question = `${num1} / ${num2}`;
      break;
  }

  return question;
}

/**
 * Parses the provided question and gets whether or not the provided answer is correct
 *
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */
function isCorrectAnswer(question, answer) {
  const [num1, operator, num2] = question.split(" ");
  const num1Int = parseInt(num1);
  const num2Int = parseInt(num2);
  const answerInt = parseFloat(answer);

  let correctAnswer;
  switch (operator) {
    case "+":
      correctAnswer = num1Int + num2Int;
      break;
    case "-":
      correctAnswer = num1Int - num2Int;
      break;
    case "*":
      correctAnswer = num1Int * num2Int;
      break;
    case "/":
      correctAnswer = num1Int / num2Int;
      break;
  }

  return correctAnswer === answerInt;
}
module.exports = {
  getQuestion,
  isCorrectAnswer,
};
