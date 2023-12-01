const log = console.log

function Game3x3(field, player){
    player = player || "X";

    field = field || [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    function getPlayer(){return player}

    /** 
     * game status:
     *     undefined = game in progress
     *     "X" - X won
     *     "O" - O won
     *     "draw" - game over with draw
     */
    function status(){
        for (let i = 0; i<field.length; i++)
        {
            if (field[i][0]==field[i][1] && field[i][1]==field[i][2] && field[i][0])
                return field[i][0];
            if (field[0][i]==field[1][i] && field[1][i]==field[2][i] && field[0][i])
                return field[0][i];
        }
        if (field[0][0]==field[1][1] && field[1][1]==field[2][2] && field[1][1])
            return(field[1][1])
        if (field[2][0]==field[1][1] && field[1][1]==field[0][2] && field[1][1])
            return(field[1][1])
        for (let i = 0; i<field.length; i++)
        {
            for (let j = 0; j<field.length; j++)
            {
                if (!field[i][j])
                    return 0
            }
        }
        return "draw";
    }

    /**
     * make a move
     * params:
     *     cell coord
     * return:
     *     undefined if cannot makeMove into provided cell
     *     next player to makeMove 
     */
    function makeMove(col, row){
        if (col<0 || col >2 || row <0 || row>2 || field[row][col])
            return;
        field[row][col] = player;
        player = player=="X" ? "O" : "X";
        return player;
    }

    /**
     * print the game into logs
     */
    function show(){
        log('   A B C ');
        for (let i = 0; i<3; i++)
        {
            log(`  -------`)
            let str = ` ${i}|`
            for (let j = 0; j<3; j++)
                str += `${field[i][j] ? field[i][j] : " "}|`
            log(str)
        }
    }

    return { status, makeMove, show, getPlayer };
}

export { Game3x3 };
