const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => stdin.on('data', key => {
  if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }

  if (key === 'b') {
    process.stdout.write('beep!\n');
  }

  if (key >= 1 && key <= 9) {
    process.stdout.write(`Setting timer for ${key} second${key > 1 ? 's' : ''}...\n`);
    let timeout = key * 1000;

    setTimeout(() => {
      process.stdout.write('beep!\n');
    }, timeout);
  }
});

timer();