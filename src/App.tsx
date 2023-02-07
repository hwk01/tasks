import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
/*import {
    bookEndList,
    countShortWords,
    shoutIfExclaiming,
    stringsToIntegers,
    tripleNumbers
} from "./arrays";
*/
import * as functions from "./functions";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

function App(): JSX.Element {
    return (
        <div className="App">
            <h1> this is a header</h1>
            <ul>
                <li>listing things</li>
                <li>many koalas</li>
                <li>and kangaroos</li>
            </ul>
            <Button onClick={() => console.log("Hello World!")}>
                /Log Hello World/
            </Button>
            <img src="/Users/hannah/Desktop/tasks/src/koala.png" alt="koala" />
            <header className="App-header">
                UM COS420 with React Hooks and TypeScript
            </header>
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}
console.log(functions.fahrenheitToCelius(-40));
console.log(functions.add3(6, -3, 9));
console.log(functions.shout("Hello"));
console.log(functions.isQuestion("Is this a question?"));
console.log(functions.convertYesNo("yes"));

/*console.log(bookEndList([1, 2, 3]));
console.log(tripleNumbers([1, 2, 3]));
console.log(stringsToIntegers(["1", "2", "3"]));
console.log(shoutIfExclaiming(["Hello", "you", "are", "great!"]));
console.log(
    countShortWords(["one", "two", "three", "four", "five", "six", "seven"])
);
console.log(["red", "red", "blue", "blue", "green", "red"]);
*/

export default App;
