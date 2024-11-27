const fs = require('fs');

module.exports = function countStudents(filePath) {
  let buffer;

  try {
    buffer = fs.readFileSync(filePath);
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const data = buffer
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim().split(','))
    .splice(1);

  console.log(`Number of students: ${data.length}`);

  const fields = new Set(data.map((row) => row[3]));

  for (const field of fields) {
    const firstnames = data.filter((row) => row[3] === field).map((row) => row[0]);

    if (firstnames.length !== 0) {
      console.log(
        `Number of students in ${field}: ${firstnames.length}. List: ${firstnames.join(', ')}`,
      );
    }
  }

  return data;
};
