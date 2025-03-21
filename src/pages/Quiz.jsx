import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import quizStore from "../store/quizStore";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./Quiz.css";

const Quiz = observer(() => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    quizStore.resetQuiz();
    quizStore.fetchQuestions();
  }, []);

  const handleAnswer = (answer) => {
    quizStore.submitAnswer(questionIndex, answer);
    if (questionIndex < quizStore.questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigate("/results");
    }
  };

  if (quizStore.questions.length === 0) return <p className="loading-text">Loading...</p>;

  const question = quizStore.questions[questionIndex];

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <button className="back-button" onClick={() => navigate("/")}>
          <FaArrowLeft /> Back
        </button>
        <h1 className="quiz-title">Quiz Game</h1>
        <p className="quiz-score">Score: {quizStore.correctAnswers}</p>
      </header>

      <main className="quiz-content">
        <h2 className="quiz-question">{question.question}</h2>
        <div className="quiz-options">
          {question.options.map((option, i) => (
            <button
              key={i}
              className="quiz-option"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </main>

      <footer className="quiz-footer">
        <p>
          Question {questionIndex + 1} of {quizStore.questions.length}
        </p>
      </footer>
    </div>
  );
});

export default Quiz;
