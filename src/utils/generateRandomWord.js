import faker from 'faker';

export default function generateRandomWord() {
  const randomWord = faker.random.word().toUpperCase().split(' ')[0];

  // digits
  if (/\d/.test(randomWord)) {
    generateRandomWord();
  }

  // special chars
  if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(randomWord)) {
    generateRandomWord();
  }

  return randomWord.toUpperCase().split(' ')[0];
}
