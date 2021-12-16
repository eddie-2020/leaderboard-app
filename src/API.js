const nameInput = document.getElementById('inputKey');
const scoreInput = document.getElementById('inputValue');

const sendData = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'God of war' }),
  });
};
sendData();

const sendScore = () => {
  fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: nameInput.value, score: scoreInput.value }),
  });
};

const getData = async () => {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/JISCZSyYfIzlC6N08Rja/scores/';
  const data = await fetch(url);
  const content = await data.json();
  return content.result;
};

export { sendData, sendScore, getData };