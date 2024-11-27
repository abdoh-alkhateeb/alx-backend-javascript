const http = require('http');
const fs = require('fs');
const util = require('util');

const readFile = async (filePath) => {
  let buffer;

  try {
    buffer = await util.promisify(fs.readFile)(filePath);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const data = buffer
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim().split(','))
    .splice(1);

  let response = '';

  response += `Number of students: ${data.length}\n`;

  const fields = new Set(data.map((row) => row[3]));

  for (const field of fields) {
    const firstnames = data.filter((row) => row[3] === field).map((row) => row[0]);

    if (firstnames.length !== 0) {
      response += `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(
        ', ',
      )}\n`;
    }
  }

  return response.trim();
};

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/students':
      res.write('This is the list of our students\n');

      readFile(process.argv[2])
        .then((response) => {
          res.end(response);
        })
        .catch((error) => {
          res.end(error.message);
        });
      break;

    default:
      res.end('Hello Holberton School!');
  }
});

const port = 1245;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

module.exports = app;
