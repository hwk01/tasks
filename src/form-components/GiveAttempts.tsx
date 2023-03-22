import React, { useState } from "react";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState(3);
    const [requestedAttempts, setRequestedAttempts] = useState("");

    const handleUseClick = () => {
        setAttemptsLeft(attemptsLeft - 1);
    };

    const handleGainClick = () => {
        const parsedRequestedAttempts = parseInt(requestedAttempts, 10);
        if (!isNaN(parsedRequestedAttempts)) {
            setAttemptsLeft(attemptsLeft + parsedRequestedAttempts);
            setRequestedAttempts("");
        }
    };

    const handleRequestedAttemptsChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setRequestedAttempts(event.target.value);
    };

    const isUseButtonDisabled = attemptsLeft === 0;

    return (
        <div>
            <p>Attempts left: {attemptsLeft}</p>
            <button onClick={handleUseClick} disabled={isUseButtonDisabled}>
                Use
            </button>
            <input
                type="number"
                value={requestedAttempts}
                onChange={handleRequestedAttemptsChange}
            />
            <button onClick={handleGainClick}>Gain</button>
        </div>
    );
}
