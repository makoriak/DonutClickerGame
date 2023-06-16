var donutCount = 0;
var autoClickers = 0;
var autoClickCost = 100;
var autoClickIntervalId;

function clickDonut() {
  donutCount++;
  document.getElementById('donutCount').textContent = donutCount;
  if (donutCount >= autoClickCost) {
    document.getElementById('autoClickBtn').disabled = false;
  }
}

function autoClick() {
  clickDonut();
}

document.getElementById('clickBtn').addEventListener('click', clickDonut);

document.getElementById('autoClickBtn').addEventListener('click', function() {
  if (donutCount >= autoClickCost) {
    donutCount -= autoClickCost;
    document.getElementById('donutCount').textContent = donutCount;

    autoClickers++;
    autoClickCost = Math.round(autoClickCost * 1.1); // Increase cost by 10%

    document.getElementById('autoClickCost').textContent = autoClickCost;
    document.getElementById('autoClickBtn').disabled = true;

    autoClickIntervalId = setInterval(autoClick, 1000); // Clicks every 1 second (adjust the interval as needed)
  }
});

document.getElementById('stopAutoClickBtn').addEventListener('click', function() {
    clearInterval(autoClickIntervalId);
  });