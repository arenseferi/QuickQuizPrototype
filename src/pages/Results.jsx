import { observer } from "mobx-react-lite";
import quizStore from "../store/quizStore";
import { Link } from "react-router-dom";
import "./Results.css";

const Results = observer(() => {
  return (
    <div className="results-container">
      <h1 className="results-title">Game Over</h1>
      <p className="results-score">
        Your Score: {quizStore.correctAnswers} / {quizStore.questions.length}
      </p>
      {quizStore.correctAnswers === quizStore.questions.length ? (
        <p className="results-message win">🎉 Congratulations! You won! 🎉</p>
      ) : (
        <p className="results-message lose">❌ Better luck next time! ❌</p>
      )}
      <Link to="/">
        <button className="play-again-button">Play Again</button>
      </Link>
    </div>
  );
});

export default Results;
