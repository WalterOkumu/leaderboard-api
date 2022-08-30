import './styles/styles.scss';
import addFavicon from './components/addFavicon.js';
import createNewScore from './components/createNewScore.js';
import getScores from './components/getScores.js';
import populateScores from './components/populateScores.js';

const apiKey = process.env.API_KEY;

const baseURL = process.env.BASE_URL;

const url = `${baseURL}/games/${apiKey}/scores`;

const refreshButton = document.getElementById('refresh-button');

const submitButton = document.getElementById('submit');

window.onload = async () => {
  addFavicon();
};

refreshButton.addEventListener('click', async () => {
  const list = await getScores(url);

  populateScores(list);
});

submitButton.addEventListener('click', async () => {
  const nameInput = document.getElementById('name');
  const scoreInput = document.getElementById('score');

  if (nameInput.value !== '' && scoreInput.value !== '') {
    createNewScore(url, nameInput.value, scoreInput.value);
    nameInput.value = '';
    scoreInput.value = '';
  }
});