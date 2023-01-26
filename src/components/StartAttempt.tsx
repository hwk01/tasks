import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [inProgress, setStartStop] = useState<boolean>(false);
    const [attemptNum, setAttemptNumber] = useState<number>(4);

    const setStart = () => {
        setAttemptNumber(attemptNum - 1);
        setStartStop(true);
    };

    const setStop = () => {
        setStartStop(false);
    };

    function mully(): void {
        setAttemptNumber(attemptNum + 1);
    }

    return (
        <div>
            <div> Attempt Number: {attemptNum}</div>
            <Button
                onClick={setStart}
                disabled={inProgress || attemptNum === 0}
            >
                Start Quiz
            </Button>
            <Button onClick={setStop} disabled={!inProgress}>
                Stop Quiz
            </Button>
            <Button onClick={mully} disabled={inProgress}>
                Mulligan
            </Button>
        </div>
    );
}
//    <button onClick={handleStart}><span style={{ color: 'green' }}>Start</span></button>
//     <button onClick={handleStop}><span style={{ color: 'green' }}>Stop</span></button>
