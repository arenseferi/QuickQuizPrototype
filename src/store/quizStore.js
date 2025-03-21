import { makeAutoObservable } from "mobx";

class QuizStore {
    questions = [];
    correctAnswers = 0;

    constructor() {
        makeAutoObservable(this);
    }

    async fetchQuestions() {
        const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
        const data = await res.json();
        this.questions = data.results.map((q) => ({
            question: q.question,
            options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
            correct: q.correct_answer,
        }));
    }

    submitAnswer(index, answer) {
        if (this.questions[index].correct === answer) {
            this.correctAnswers++;
        }
    }

    resetQuiz() {
        this.questions = [];
        this.correctAnswers = 0;
    }
}

const quizStore = new QuizStore();
export default quizStore;
