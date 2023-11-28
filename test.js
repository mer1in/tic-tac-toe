const log = console.log

field = [
    ["X", 0, 0],
    [0, 0, "O"],
    [0, 0, 0],
]

function show(f){
    log('   A B C ');
    for (let i = 0; i<3; i++)
    {
        log(`  -------`)
        let str = ` ${i}|`
        for (let j = 0; j<3; j++)
            str += `${f[i][j] ? f[i][j] : " "}|`
        log(str)
    }
}
function isComplete(f){
    for (let i = 0; i<f.length; i++)
    {
        if (f[i][0] == f[i][1] && f[i][1] == f[i][2] && !!f[i][0])
            return f[i][0];
        if (f[0][i] == f[1][i] && f[1][i] == f[2][i] && !!f[0][i])
            return f[0][i];
    }
    if (f[0][0] == f[1][1] && f[1][1] == f[2][2] && !!f[1][1])
        return(f[1][1])
    if (f[2][0] == f[1][1] && f[1][1] == f[0][2] && !!f[1][1])
        return(f[1][1])
    return 0;
}

show(field)
const test = (func, expect, args) => {
    const res = func(...args);
    if (expect == res)
    {
        log("ok");
        return true;
    }
    log("Fail! input:", args, `expected: "${expect}" but got "${res}"`)
}
test(isComplete, "X", [
    [
        ["X", 0, 0],
        ["X", 0, 0],
        ["X", 0, 0],
    ]
])
test(isComplete, "X", [
    [
        ["X", 0,  0 ],
        [ 0, "X", 0 ],
        ["X", 0, "X"],
    ]
])
test(isComplete, "O", [
    [
        ["O", "O", "O"],
        ["X",  0,   0 ],
        ["X",  0,   0 ],
    ]
])
test(isComplete, "O", [
    [
        ["O",  0,   0 ],
        ["X", "O",  0 ],
        ["O", "O", "O"],
    ]
])
test(isComplete, 0, [
    [
        ["O",  0,   0 ],
        ["X", "O",  0 ],
        ["O", "O", "X"],
    ]
])
