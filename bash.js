process.stdout.write('prompt >');

process.stdin.on('data', (data) => {
  const cmd = data.toString().trim();

  if(cmd === 'pwd') {
    return pwd();
  }

  process.stdout.write('You typed: ' + cmd)
  process.stdout.write('\nprompt > ')
})

const pwd = require('./pwd')
