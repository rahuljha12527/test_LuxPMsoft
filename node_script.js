const { spawnSync } = require('child_process');

// Step 4: Call the Python script
const pythonScript = spawnSync('python', ['python_script.py']);
const output = pythonScript.stdout.toString().trim();


// Step 5: Extract only the letters from the JSON packet and reverse the order
const jsonData = JSON.parse(output);
const extractedLetters = jsonData.result.match(/[a-zA-Z]+/g);
const reversedLetters = extractedLetters ? extractedLetters.join('').split('').reverse().join('') : '';

console.log(reversedLetters);
