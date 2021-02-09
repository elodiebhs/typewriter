//Implement the logic to have each letter delay its appearance by 50ms (or so) longer than the previous letter.

const sentence = "hello there from lighthouse labs\n'";

const func = str => {
  let i = 0;
  for (const char of str) {
    setTimeout(() => {
      process.stdout.write(char);
    }, i);
    i += 50;
  }
};

func(sentence);
