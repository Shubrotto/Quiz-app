import React, { useEffect, useState } from "react";
import useSound from "use-sound";
import Intro from "../assets/audios/Intro.mp3";
import Right_ans from "../assets/audios/right_ans.m4a";
import Wrong_ans from "../assets/audios/wrong_ans.m4a";

const Trivia = ({
  dataQustion,
  setStop,
  questionNumber,
  setQuestionNumber,
}) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(Intro);
  const [rightAns] = useSound(Right_ans);
  const [wrongAns] = useSound(Wrong_ans);
  useEffect(() => {
    letsPlay();
  }, [letsPlay]);

  useEffect(() => {
    setQuestion(dataQustion[questionNumber - 1]);
  }, [dataQustion, questionNumber]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleSelected = (a) => {
    setSelectedAnswer(a);
    setClassName("answer active");
    delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });
    delay(5000, () => {
      if (a.correct) {
        rightAns();
        delay(3000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        });
      } else {
        wrongAns();
        delay(3000, () => {
          setStop(true);
        });
      }
    });
  };
  return (
    <div className="kbc">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a, i) => (
          <div
            key={i}
            className={selectedAnswer === a ? className : "answer"}
            onClick={() => handleSelected(a)}
          >
            {a.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trivia;
