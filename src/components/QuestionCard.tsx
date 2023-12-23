import React, { useState, useEffect } from 'react';
import questionsData from '../test.json';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuestionCard: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    setQuestions(questionsData);
  }, []);

  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [warning, setWarning] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleCheckboxChange = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prevOptions) => prevOptions.filter((opt) => opt !== option));
    } else {
      setSelectedOptions((prevOptions) => [...prevOptions, option]);
    }
  };

  const handleSubmit = () => {
    if (selectedOptions.length === 0) {
      setWarning('Please select at least one option.');
    } else {
      if (currentQuestionId === questions.length - 1) {
        setShowResults(true);
      } else {
        setCurrentQuestionId((prevId) => prevId + 1);
        setSelectedOptions([]);
        setWarning('');
      }
    }
  };

  const currentQuestion = questions[currentQuestionId];

  const getAnswerColor = (option: string, question: Question) => {
    const isCorrectOption = question.correctAnswer.includes(option);
    const isSelectedOption = selectedOptions.includes(option);
    if (isSelectedOption && isCorrectOption) {
      return 'correct';
    } else if (isSelectedOption && !isCorrectOption) {
      return 'wrong';
    } else {
      return '';
    }
  };
  return (
    <div className="page">
      <div className="card">
        {showResults ? (
          <div>
            <h1>Results</h1>
            {questions.map((question) => (
              <div key={question.id}>
              <p>{question.question}</p>
        <ul>
          {question.options.map((option, id) => (
            <li key={id} className={getAnswerColor(option, question)}>
              {option}
            </li>
          ))}
        </ul>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h1>{currentQuestion?.question}</h1>
            <hr />
            <ul>
              {currentQuestion?.options.map((option, id) => (
                <li key={id}>
                  <input
                    type="checkbox"
                    id={`option-${id}`}
                    value={option}
                    checked={selectedOptions.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  <label htmlFor={`option-${id}`}>{option}</label>
                </li>
              ))}
            </ul>
            {warning && <p className="wrong">{warning}</p>}
            <button className="card-button" onClick={handleSubmit}>
              {currentQuestionId === questions.length - 1 ? 'Finish' : 'Submit'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuestionCard;
