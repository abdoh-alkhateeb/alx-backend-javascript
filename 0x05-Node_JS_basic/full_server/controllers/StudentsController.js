import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        res.status(200);
        res.write('This is the list of our students');

        const fields = Object.keys(data);
        fields.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of fields) {
          res.write(
            `\nNumber of students in ${field}: ${data[field].length}. List: ${data[field].join(
              ', ',
            )}`,
          );
        }

        res.end();
      })
      .catch(() => {
        res.status(500);
        res.send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    readDatabase(process.argv[2])
      .then((data) => {
        const { major } = req.params;
        if (['CS', 'SWE'].includes(major)) res.status(200).send(`List: ${data[major].join(', ')}`);
        else {
          res.status(500).send('Major parameter must be CS or SWE');
        }
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}
