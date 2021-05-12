const chalk = require('chalk');

/**
 * A Cross Platform Hello World function 
 * to demonstrate a simple Yarn Berry Monorepo
 * @param {('server'|'web')} enviroment 
 */
function helloWorld(enviroment) {
    switch (enviroment) {
        case 'server':
            console.log(chalk.blue('This is a server.'));
            break;
        case 'web':
            console.log(chalk.yellow('This is a web app.'));
            break;
        default:
            throw new Error('Not Supported Enviroment');
    }
}

module.exports = {
    helloWorld
}