const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Employee Tracker System! (づ ◕‿◕ )づ ");

function askForInput(question, callback) {
  rl.question(question, (answer) => {
    const number = parseInt(answer);
    if (!Number.isInteger(number) || number < 0 || answer.includes('.')) {
      console.log("(ᗒᗣᗕ)՞ Please enter a positive whole number only. (´⊙ω⊙`)！");
      askForInput(question, callback);
    } else {
      callback(number);
    }
  });
}

askForInput('Enter the number of newly hired males: ', (newMale) => {
  askForInput('Enter the number of newly hired females: ', (newFemale) => {
    askForInput('Enter the number of males in permanent position: ', (permMale) => {
      askForInput('Enter the number of females in permanent position: ', (permFemale) => {
        askForInput('Enter the number of males who resigned: ', (resignedMale) => {
          askForInput('Enter the number of females who resigned: ', (resignedFemale) => {
            const totalHired = newMale + newFemale;
            const totalPermanent = permMale + permFemale;
            const totalResigned = resignedMale + resignedFemale;

            console.log('\nThank you for providing the information!\n');
            console.log('Here is the Summary of Employee Data');

            console.log(`Total newly hired employees: ${totalHired}`);
            console.log(`- Males: ${newMale} (${((newMale / totalHired) * 100).toFixed(2)}%)`);
            console.log(`- Females: ${newFemale} (${((newFemale / totalHired) * 100).toFixed(2)}%)`);

            console.log(`Total permanent employees: ${totalPermanent}`);
            console.log(`- Males: ${permMale} (${((permMale / totalPermanent) * 100).toFixed(2)}%)`);
            console.log(`- Females: ${permFemale} (${((permFemale / totalPermanent) * 100).toFixed(2)}%)`);

            console.log(`Total resigned employees: ${totalResigned}`);
            console.log(`- Males: ${resignedMale} (${((resignedMale / totalResigned) * 100).toFixed(2)}%)`);
            console.log(`- Females: ${resignedFemale} (${((resignedFemale / totalResigned) * 100).toFixed(2)}%)`);

            console.log("\nHave a great day ahead!");

            rl.close();
          });
        });
      });
    });
  });
});
