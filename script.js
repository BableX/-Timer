let count = 0;
let interval;

const sum = document.getElementById('sum');
const startBtn = document.getElementById('Start');
const stopBtn = document.getElementById('Stop');
const clearBtn = document.getElementById('Clear');

startBtn.onclick = () => {
  if (!interval) {
    interval = setInterval(() => {
      count++;
      sum.textContent = count;
    }, 1000);
  }
};

stopBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
};

clearBtn.onclick = () => {
  clearInterval(interval);
  interval = null;
  count = 0;
  sum.textContent = count;
};
