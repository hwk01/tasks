import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

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
            <img
                src="/Users/hannah/Desktop/tasks/src/koala copy.png"
                alt="koala"
            />
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
                            style={ background-color: rgb(255,0,0)}
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

export default App;
