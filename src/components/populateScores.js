import removeChildNodes from './removeChildNodes.js';

const populateScores = (listData) => {
  const listObj = document.getElementsByClassName('score-list')[0];

  removeChildNodes(listObj);

  if (listData.length > 0) {
    listData.forEach((score) => {
      const listItem = document.createElement('li');

      listItem.className = 'score-list-item';
      listItem.innerHTML = `${score.user} : ${score.score}`;

      listObj.appendChild(listItem);
    });
  }
};

export default populateScores;