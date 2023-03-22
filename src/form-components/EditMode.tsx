import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [editMode, setEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const handleSwitch = () => {
        setEditMode(!editMode);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleIsStudentChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setIsStudent(event.target.checked);
    };

    const studentText = isStudent ? "is a student" : "is not a student";

    return (
        <div>
            <Form>
                <Form.Check
                    type="switch"
                    id="edit-mode-switch"
                    label="Edit Mode"
                    checked={editMode}
                    onChange={handleSwitch}
                />
            </Form>

            {editMode ? (
                <Form>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Check
                            type="checkbox"
                            id="is-student-checkbox"
                            label="Student"
                            checked={isStudent}
                            onChange={handleIsStudentChange}
                        />
                    </Form.Group>

                    <p>
                        {name} {studentText}
                    </p>
                </Form>
            ) : (
                <p>
                    {name} {studentText}
                </p>
            )}
        </div>
    );
}
