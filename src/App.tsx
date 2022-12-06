import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import {
    add3,
    convertYesNo,
    fahrenheitToCelius,
    isQuestion,
    shout
} from "./functions";

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
<<<<<<< HEAD
                Heading with React Hooks and TypeScript
=======
                UM COS420 with React Hooks and TypeScript
>>>>>>> upstream/task-arrays
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
console.log(fahrenheitToCelius(-40));
console.log(add3(6, -3, 9));
console.log(shout("Hello"));
console.log(isQuestion("Is this a question?"));
console.log(convertYesNo("Yes"));
export default App;
