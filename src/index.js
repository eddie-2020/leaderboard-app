import { sendData, sendScore, getData } from './API';

const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnSubmit');
const lsOutput = document.getElementById('data');
const refresher = document.getElementById('btnRefresher');

const renderDataBoard = async () => {
  const score = await getData();
  lsOutput.innerHTML = '';
  score.forEach((item) => {
    const newListData = `<li class='dataElement'> ${item.user} : ${item.score} </li><br/>`;
    lsOutput.innerHTML += newListData;
  });
};

const createNewGame = async () => {
  await sendData();
  renderDataBoard();
};
createNewGame();

refresher.addEventListener('click', () => {
  lsOutput.innerHTML = '';
  renderDataBoard();
});

btnInsert.addEventListener('click', async (e) => {
  e.preventDefault();
  await sendScore();
  inputKey.value = '';
  inputValue.value = '';
});
renderDataBoard();