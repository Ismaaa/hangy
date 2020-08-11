import faker from 'faker';

export default function generateRandomWord() {
  let randomWord = faker.random.word().toUpperCase().split(' ')[0];

  // digits
  if (/\d/.test(randomWord)) {
    randomWord = generateRandomWord();
  }

  // special chars
  // eslint-disable-next-line no-useless-escape
  if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(randomWord)) {
    randomWord = generateRandomWord();
  }

  return randomWord.toUpperCase().split(' ')[0];
}
