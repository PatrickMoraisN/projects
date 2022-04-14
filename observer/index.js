const readline = require("readline");

function getAnswer(question) {
  const rlInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rlInterface.question(question, (answer) => {
      resolve(answer);
      rlInterface.close();
    });
  });
}

function gf() {
  console.log("gf: at 1");
  console.log("gf: at 2");
  console.log("gf: at 3");
}

function sind(event) {
  console.log("sid: at 1");
  console.log(`sid: ${event.answer}`);
  console.log(`sid: ${event.date}`);
}

async function portSubject(observers) {
  while (true) {
    const answer = await getAnswer("y/N/q ");
    if (answer.toLowerCase() === "y") {
      (observers || []).forEach((observer) =>
        observer({ answer, date: new Date() })
      );
    }
    if (answer.toLowerCase() === "q") {
      break;
    }
  }
}

portSubject([sind, gf]);
