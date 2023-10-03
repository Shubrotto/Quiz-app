import { useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
const data = [
  { id: 15, amount: "10000000 Tk" },
  { id: 14, amount: "5000000 Tk" },
  { id: 13, amount: "2500000 Tk" },
  { id: 12, amount: "1250000 Tk" },
  { id: 11, amount: "500000 Tk" },
  { id: 10, amount: "250000 Tk" },
  { id: 9, amount: "125000 Tk" },
  { id: 8, amount: "100000 Tk" },
  { id: 7, amount: "50000 Tk" },
  { id: 6, amount: "25000 Tk" },
  { id: 5, amount: "50000 Tk" },
  { id: 4, amount: "25000 Tk" },
  { id: 3, amount: "12500 Tk" },
  { id: 2, amount: "5000 Tk" },
  { id: 1, amount: "1000 Tk" },
];

const dataQustion = [
  {
    id: 1,
    question: "Ctrl, Shift and Alt are called .......... keys.",
    answers: [
      {
        text: "A) modifier",
        correct: true,
      },
      {
        text: "B) function",
        correct: false,
      },
      {
        text: "C) alphanumeric",
        correct: false,
      },
      {
        text: "D) adjustment",
        correct: false,
      },
    ],
  },
  {
    id: 2,
    question: "What color does yellow and green make?",
    answers: [
      {
        text: "A) Lime",
        correct: true,
      },
      {
        text: "B) Ocean mist",
        correct: false,
      },
      {
        text: "C) Maroon",
        correct: false,
      },
      {
        text: "D) Tangerine",
        correct: false,
      },
    ],
  },
  {
    id: 3,
    question: "A computer cannot 'boot' if it does not have the _____",
    answers: [
      {
        text: "A) Complier",
        correct: false,
      },
      {
        text: "B) Loader",
        correct: false,
      },
      {
        text: "C) Operating system",
        correct: true,
      },
      {
        text: "D) Assembler",
        correct: false,
      },
    ],
  },
];

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom">
          <Trivia
            dataQustion={dataQustion}
            setTimeOut={setTimeOut}
            questionNumber={questionNumber}
            setQuestion={setQuestionNumber}
          />
        </div>
      </div>
      <div className="pyramid">
        <ul className="money_list">
          {data.map((d, index) => {
            return (
              <li
                key={index}
                className={
                  questionNumber === d.id
                    ? "money_List_Item active"
                    : "money_List_Item"
                }
              >
                <span className="money_list_item_num">{d.id}.</span>{" "}
                <span className="money_list_item_amount">{d.amount}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
