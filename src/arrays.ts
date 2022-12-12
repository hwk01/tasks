/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (Number.isInteger(numbers[0])) {
        return [numbers[0], numbers[numbers.length - 1]];
    }
    return [];
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    return numbers.map((numbers: number): number => numbers * 3);
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]) {
    const newarray = numbers.map((string) => {
        const hold = parseInt(string);
        return isNaN(hold) ? 0 : hold;
    });
    return newarray;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const newarray = amounts.map((string) => {
        if (string[0] === "$") {
            const hold2 = string.split("");
            hold2.splice(0, 1);
            string = hold2.join("");
        }
        const hold = parseInt(string);
        return isNaN(hold) ? 0 : hold;
    });
    return newarray;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let newarray = messages.map((string) => {
        if (string.endsWith("!")) return string.toUpperCase();
        else return string;
    });
    newarray = newarray.filter((string) => {
        if (string.endsWith("?")) return false;
        else return true;
    });
    return newarray;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]) {
    let count = 0;
    words.filter((string) => {
        if (string.length < 4) count = count + 1;
        else return false;
    });
    return count;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const newarray = colors.filter((string) => {
        if (string === "red") return string;
        else if (string === "blue") return string;
        else if (string === "green") return string;
        else return false;
    });

    if (colors.length !== newarray.length) return false;
    return true;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */

export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    const newarray = addends.reduce((total: number, n: number) => total + n, 0);

    const joined = addends.join("+");
    return newarray + "=" + joined;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let neg = false;
    const newarray = values.reduce((prev, next) => {
        if (neg) {
            return prev;
        }
        if (next < 0 && neg == false) {
            neg = true;
            return prev;
        }
        return prev + next;
    }, 0);
    let index;
    let negative = false;
    const diffarray = values.map((x: number): number => {
        if (x < 0 && negative === false) {
            index = values.indexOf(x);
            negative = true;
            return x;
        } else return x;
    });
    if (!index && index !== 0) {
        diffarray.push(newarray);
    } else {
        diffarray.splice(index + 1, 0, newarray);
    }
    return diffarray;
}
