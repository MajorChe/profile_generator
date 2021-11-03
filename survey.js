const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question("What's your name? Nicknames are also acceptable :)", (answer1) => {
  rl.question("What's an activity you like doing?", (answer2) => {
    rl.question("What do you listen to while doing that?", (answer3) => {
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer4) => {
        rl.question("What's your favourite thing to eat for that meal?", (answer5) => {
          rl.question("Which sport is your absolute favourite?", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer7) => {
              console.log(`${answer1} loves ${answer2} and she listens to ${answer3}. I like ${answer4}
               and I like to eat ${answer5}. My Fav game is ${answer6}. Finally my super power is ${answer7} !!`)
              rl.close();
            });
          });
        });
      });
    });
  })
});


