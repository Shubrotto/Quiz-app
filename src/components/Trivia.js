import React, { useEffect, useState } from "react";

const Trivia = ({
  dataQustion,
  setTimeOut,
  questionNumber,
  setQuestionNumber,
}) => {
  console.log(dataQustion);
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectednswer] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(dataQustion[questionNumber - 1]);
  }, [dataQustion, questionNumber]);

  const handleSelected = (a) => {
    setSelectednswer(a);
    setClassName("answer active");
  };
  return (
    <div className="kbc">
      <div className="question">{question?.question}</div>
      <div className="answers">
        {question?.answers.map((a) => (
          <div
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
