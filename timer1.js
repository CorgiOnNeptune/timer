const timer = (args) => {
  for (const arg of args) {
    if (arg < 0 || Number.isNaN(Number(arg))) {
      continue;
    }

    let timeout = arg * 1000;
    setTimeout(() => {
      process.stdout.write('.');
    }, timeout);
  }
};

const args = process.argv.slice(2);
timer(args);