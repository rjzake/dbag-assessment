const prompt = require('prompt');

prompt.start();

// Schema for prompting
const schema = {
  properties: {
    newMale: {
      description: 'Enter the number of newly hired males (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    },
    newFemale: {
      description: 'Enter the number of newly hired females (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    },
    permMale: {
      description: 'Enter the number of permanent position males (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    },
    permFemale: {
      description: 'Enter the number of permanent position females (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    },
    resignedMale: {
      description: 'Enter the number of resigned males (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    },
    resignedFemale: {
      description: 'Enter the number of resigned females (positive whole number)',
      type: 'integer',
      message: 'Please enter a valid positive whole number',
      required: true,
      conform: value => parseInt(value) >= 0
    }
  }
};

// Prompting
prompt.get(schema, (err, result) => {
  if (err) {
    console.error('Error occurred:', err);
    return;
  }

  const { newMale, newFemale, permMale, permFemale, resignedMale, resignedFemale } = result;
  const totalHired = parseInt(newMale) + parseInt(newFemale);
  const totalPermanent = parseInt(permMale) + parseInt(permFemale);
  const totalResigned = parseInt(resignedMale) + parseInt(resignedFemale);

  console.log('===\nThank you for the Information\n===');
  console.log('Here is the Summary !!!');
  console.log(`Number of hired employee = ${totalHired}`);
  console.log(`Male = ${(newMale / totalHired * 100).toFixed(2)}%`);
  console.log(`Female = ${(newFemale / totalHired * 100).toFixed(2)}%`);
  console.log(`Number of Permanent Employee = ${totalPermanent}`);
  console.log(`Male = ${(permMale / totalPermanent * 100).toFixed(2)}%`);
  console.log(`Female = ${(permFemale / totalPermanent * 100).toFixed(2)}%`);
  console.log(`Number of Resigned Employee = ${totalResigned}`);
  console.log(`Male = ${(resignedMale / totalResigned * 100).toFixed(2)}%`);
  console.log(`Female = ${(resignedFemale / totalResigned * 100).toFixed(2)}%`);

  prompt.stop();
});
