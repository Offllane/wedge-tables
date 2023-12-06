String.prototype.addDotsToString = function (dotsQuantity) {
  let str = this.valueOf();
  for (let i = 0; i < dotsQuantity; i++) {
    str += '.';
  }
  return str;
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS downloaded successfully');

  const wrapper = document.getElementById('wrapper');
  console.log(wrapper);

  for (let i = 1, j = 3; i < 70; i++, j+=2) {
    const div = document.createElement('div');

    const randomNumber = Math.ceil(Math.random() * 9);
    let tableCell = '';
    tableCell += String(randomNumber);
    tableCell = tableCell.addDotsToString(j);
    tableCell += String(i);
    tableCell = tableCell.addDotsToString(j);
    tableCell += String(randomNumber);

    div.innerText = tableCell;
    div.style.top = `${i * 25}px`;
    wrapper.appendChild(div);
  }
})