import React, { useState } from "react";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [userAnswer, setUserAnswer] = useState("");

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(event.target.value);
    };

    const answerIsCorrect =
        userAnswer.toLowerCase() === expectedAnswer.toLowerCase();

    return (
        <div>
            <h3>Check Answer</h3>
            <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
            />
            {answerIsCorrect ? <p>✔️</p> : <p>❌</p>}
        </div>
    );
}
