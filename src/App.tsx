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
                Heading with React Hooks and TypeScript
            </header>
            <p>
                Hello World <code>src/App.tsx</code> COS420
            </p>{" "}
            <Container>
                <Row>
                    <Col>
                        {" "}
                        <div
                            style={{ border: "1px solid red", padding: "4px" }}
                        >
                            this will be surrounded by a border and padding.
                        </div>
                    </Col>
                    <Col>
                        {" "}
                        <div
                            style={{ border: "1px solid red", padding: "4px" }}
                        >
                            this will be surrounded by a border and padding.
                        </div>
                    </Col>
                </Row>
            </Container>
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
