const inputKey = document.getElementById('inputKey');
const inputValue = document.getElementById('inputValue');
const btnInsert = document.getElementById('btnSubmit');

btnInsert.onclick = () => {
  const key = inputKey.value;
  const { value } = inputValue;

  if (key && value) {
    localStorage.setItem(key, value);
  }
};

for (let i = 0; i < localStorage.length; i += 1) {
  const key = localStorage.key(i);
  const value = localStorage.getItem(key);

  const lsOutput = document.getElementById('data');

  const list = document.createElement('li');
  list.className = 'dataList';
  list.innerHTML += `${key} : ${value}</br>`;

  lsOutput.appendChild(list);
}
