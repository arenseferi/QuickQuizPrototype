import { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import "./Home.css";

function Home() {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isDifficultyOpen, setIsDifficultyOpen] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isGameModeOpen, setIsGameModeOpen] = useState(false);
  const [gameMode, setGameMode] = useState("Single Player");

  const colorClasses = [
    "red", "blue", "green", "yellow",
    "purple", "pink", "orange", "brown"
  ];

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="navbar-left">
          <div className="dropdown">
            <button
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsDifficultyOpen(false);
                setIsSortOpen(false);
                setIsGameModeOpen(false);
              }}
            >
              Category ▼
            </button>
            {isCategoryOpen && (
              <div className="dropdown-content">
                <div>General Knowledge</div>
                <div>Science</div>
                <div>History</div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              onClick={() => {
                setIsDifficultyOpen(!isDifficultyOpen);
                setIsCategoryOpen(false);
                setIsSortOpen(false);
                setIsGameModeOpen(false);
              }}
            >
              Difficulty ▼
            </button>
            {isDifficultyOpen && (
              <div className="dropdown-content">
                <div>Easy</div>
                <div>Medium</div>
                <div>Hard</div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              onClick={() => {
                setIsSortOpen(!isSortOpen);
                setIsCategoryOpen(false);
                setIsDifficultyOpen(false);
                setIsGameModeOpen(false);
              }}
            >
              Sort By ▼
            </button>
            {isSortOpen && (
              <div className="dropdown-content">
                <div>Newest</div>
                <div>Popular</div>
                <div>Difficulty</div>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              onClick={() => {
                setIsGameModeOpen(!isGameModeOpen);
                setIsCategoryOpen(false);
                setIsDifficultyOpen(false);
                setIsSortOpen(false);
              }}
            >
              {gameMode} ▼
            </button>
            {isGameModeOpen && (
              <div className="dropdown-content">
                <div
                  onClick={() => {
                    setGameMode("Single Player");
                    setIsGameModeOpen(false);
                  }}
                >
                  Single Player
                </div>
                <div
                  onClick={() => {
                    setGameMode("Multiplayer");
                    setIsGameModeOpen(false);
                  }}
                >
                  Multiplayer
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="navbar-right">
          <FaUserCircle size={32} className="profile-icon" />
        </div>
      </nav>
      <h1 class="title">QuickQuiz</h1>
      <div className="grid-container">
        {Array(8).fill(0).map((_, index) => (
          <Link
            key={index}
            to="/quiz"
            className="quiz-box"
            style={{ backgroundColor: colorClasses[index % colorClasses.length] }}
          >
            <h2>Quiz {index + 1}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
