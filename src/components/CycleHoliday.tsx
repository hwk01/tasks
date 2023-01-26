import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Holiday } from "../interfaces/holiday";

const holidays: Holiday[] = [
    { name: "Christmas", emoji: "🎄", date: "December 25th" },
    { name: "Dragon Boat Festival", emoji: "🎏", date: "summer" },
    { name: "Diwali", emoji: "🪔", date: "early October" },
    { name: "Halloween", emoji: "🎃", date: "end of October" },
    { name: "New Year", emoji: "🎉", date: "January 1st" }
];

function CycleHoliday() {
    const [currentHoliday, setCurrentHoliday] = useState(holidays[0]);
    const [sortedHolidays, setSortedHolidays] = useState(
        holidays.sort((a, b) => a.name.localeCompare(b.name))
    );

    const nextHolidayAlphabetically = () => {
        const currentIndex = sortedHolidays.findIndex(
            (holidays) => holidays === currentHoliday
        );
        const nextIndex = (currentIndex + 1) % sortedHolidays.length;
        setCurrentHoliday(sortedHolidays[nextIndex]);
    };

    const nextHolidayByYear = () => {
        const currentIndex = holidays.findIndex(
            (holidays) => holidays === currentHoliday
        );
        let nextIndex = currentIndex + 1;
        if (nextIndex === holidays.length) {
            nextIndex = 0;
        }
        setCurrentHoliday(holidays[nextIndex]);
    };
    return (
        <div>
            <Button onClick={nextHolidayAlphabetically}>
                Advance by Alphabet
            </Button>
            <Button onClick={nextHolidayByYear}>Advance by Year</Button>
            <div> Holiday: {currentHoliday.emoji}</div>
        </div>
    );
}

export default CycleHoliday;
