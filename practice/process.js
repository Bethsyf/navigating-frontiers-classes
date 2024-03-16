// const process = require('process');

process.on('beforeExit', () => {
  console.log('El proceso va a terminar');
});

process.on('exit', () => {
  console.log('Bet, el proceso acabó');
});

process.on('uncaughtException', (err, origen) => {
  console.error('Vaya se nos ha olvidado capturar un error');
  console.error(err);
});
//process.on('uncaughtRejection');

//funcionQueNoExiste();
process.on('');
