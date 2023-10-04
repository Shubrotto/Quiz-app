import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {
  const [username, setUsername] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0 Tk");

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
    {
      id: 4,
      question:
        "Which of the following is used in React.js to increase performance?",
      answers: [
        {
          text: "A) Virtual DOM",
          correct: true,
        },
        {
          text: "B) Original DOM",
          correct: false,
        },
        {
          text: "C) Both A and B",
          correct: false,
        },
        {
          text: "D) None of the Above",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "What is ReactJS?",
      answers: [
        {
          text: "A) Server_side framework",
          correct: false,
        },
        {
          text: "B) user Interface framework",
          correct: true,
        },
        {
          text: "C) Both A and B",
          correct: false,
        },
        {
          text: "D) None of the Above",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question:
        "Identify the one which is used to pass data to components from outside",
      answers: [
        {
          text: "A) Render with arguments",
          correct: false,
        },
        {
          text: "B) setState",
          correct: false,
        },
        {
          text: "C) PropTypes",
          correct: false,
        },
        {
          text: "D) props",
          correct: true,
        },
      ],
    },
  ];
  const dataPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "1000 Tk" },
        { id: 2, amount: "5000 Tk" },
        { id: 3, amount: "12500 Tk" },
        { id: 4, amount: "25000 Tk" },
        { id: 5, amount: "50000 Tk" },
        { id: 6, amount: "25000 Tk" },
        { id: 7, amount: "50000 Tk" },
        { id: 8, amount: "100000 Tk" },
        { id: 9, amount: "125000 Tk" },
        { id: 10, amount: "250000 Tk" },
        { id: 11, amount: "500000 Tk" },
        { id: 12, amount: "1250000 Tk" },
        { id: 13, amount: "2500000 Tk" },
        { id: 14, amount: "5000000 Tk" },
        { id: 15, amount: "10000000 Tk" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(dataPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [dataPyramid, questionNumber]);
  return (
    <div className="app">
      {username ? (
        <>
          <div className="main">
            {stop ? (
              <h1 className="earnedMoney">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    dataQustion={dataQustion}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="money_list">
              {dataPyramid.map((d, index) => {
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
        </>
      ) : (
        <Start setUsername={setUsername} />
      )}
    </div>
  );
}

export default App;
