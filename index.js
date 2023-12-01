import readline from 'readline';
import { Game3x3 } from './game3x3.js';
const log = console.log
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const prompt = query => new Promise(resolve => rl.question(query, resolve));

(async() => {
    const game = Game3x3();
    while(!game.status()){
        game.show();
        const move = await prompt(`Where are you going to set ${game.getPlayer()}? `);
        const col = move.charCodeAt(0)-'A'.charCodeAt(0);
        const row = move[1]*1;
        if (game.makeMove(col, row))
            log('accepted')
        else
            log('wrong input, try again')
    }
    game.show();
    log(game.status())
    rl.close();
})();

rl.on('close', () => process.exit(0));
