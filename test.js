const log = console.log
import { Game3x3 } from './game3x3.js';

const test = (func, expect, args) => {
    const res = func(...args);
    if (expect == res)
    {
        log("ok");
        return true;
    }
    log("Fail! input:", args, `expected: "${expect}" but got "${res}"`)
}

const testGameStatus = (field, expect) => {
    return test(a => {
            const g = Game3x3(a);
            return g.status()
        }, expect, [field]
    )
}

[

    {
        field: [
            ["X", 0, 0],
            ["X", 0, 0],
            ["X", 0, 0],
        ],
        expect: "X"
    },

    {
        field: [
            ["X", 0,  0 ],
            [ 0, "X", 0 ],
            ["X", 0, "X"],
        ],
        expect: "X"
    },

    {
        field: [
            ["O", "O", "O"],
            ["X",  0,   0 ],
            ["X",  0,   0 ],
        ],
        expect: "O"
    },

    {
        field: [
            ["O",  0,   0 ],
            ["X", "O",  0 ],
            ["O", "O", "O"],
        ],
        expect: "O"
    },

    {
        field: [
            ["O",  0,   0 ],
            ["X", "O",  0 ],
            ["O", "O", "X"],
        ],
        expect: 0
    },

    {
        field: [
            ["O", "X", "X"],
            ["X", "O", "O"],
            ["X", "O", "X"],
        ],
        expect: "draw"
    },

].forEach(t => testGameStatus(t.field, t.expect))
