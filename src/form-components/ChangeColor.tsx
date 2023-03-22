import React, { useState } from "react";
import { Form } from "react-bootstrap";

const COLORS = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
    "black"
];

export function ChangeColor(): JSX.Element {
    const [selectedColor, setSelectedColor] = useState(COLORS[0]);

    function handleColorChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSelectedColor(e.target.value);
    }

    const colorRadios = COLORS.map((color) => (
        <Form.Check
            key={color}
            inline
            type="radio"
            label={color}
            name="color"
            value={color}
            checked={selectedColor === color}
            onChange={handleColorChange}
        />
    ));

    return (
        <div>
            <h3>Change Color</h3>
            <div
                data-testid="colored-box"
                style={{ backgroundColor: selectedColor, padding: "1rem" }}
            >
                {selectedColor}
            </div>
            <Form>{colorRadios}</Form>
        </div>
    );
}
