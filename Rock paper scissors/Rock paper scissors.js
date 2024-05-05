const rps = (p1, p2) => {
  const P = "paper";
  const R = "rock";
  const S = "scissors";

  if (p1 === p2) {
    return "Draw!";
  }
  if (p1 === S && p2 === P) {
    return "Player 1 won!";
  }
  if (p1 === S && p2 === R) {
    return "Player 2 won!";
  }
  if (p1 === R && p2 === P) {
    return "Player 2 won!";
  }
  if (p1 === R && p2 === S) {
    return "Player 1 won!";
  }
  if (p1 === P && p2 === S) {
    return "Player 2 won!";
  }
  if (p1 === P && p2 === R) {
    return "Player 1 won!";
  }
};
