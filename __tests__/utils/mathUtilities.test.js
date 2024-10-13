const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
  test("should generate a valid question", () => {
    const question = getQuestion();
    expect(question).toMatch(/^\d+ [+\-*/] \d+$/); // Check if the question matches the pattern "number operator number"
  });
});

describe("Tests for isCorrectAnswer", () => {
  test("should detect a correct answer", () => {
    const question = "2 + 3";
    const answer = "5";
    expect(isCorrectAnswer(question, answer)).toBe(true);
  });

  test("should detect an incorrect answer", () => {
    const question = "2 + 3";
    const answer = "4";
    expect(isCorrectAnswer(question, answer)).toBe(false);
  });
});
