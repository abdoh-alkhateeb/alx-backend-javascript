import fs from 'fs';
import util from 'util';

export default async function readDatabase(filePath) {
  const buffer = await util.promisify(fs.readFile)(filePath);

  const data = buffer
    .toString()
    .trim()
    .split('\n')
    .map((line) => line.trim().split(','))
    .splice(1);

  const fields = new Set(data.map((row) => row[3]));

  const result = {};

  for (const field of fields) {
    result[field] = data.filter((row) => row[3] === field).map((row) => row[0]);
  }

  return result;
}
