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
      donutCount += autoClickers;
      document.getElementById('donutCount').textContent = donutCount;
    }

    document.getElementById('clickBtn').addEventListener('click', clickDonut);

    document.getElementById('autoClickBtn').addEventListener('click', function() {
      if (donutCount >= autoClickCost) {
        donutCount -= autoClickCost;
        document.getElementById('donutCount').textContent = donutCount;

        autoClickers++;
        autoClickCost = Math.round(autoClickCost * 1.1); // 10%

        document.getElementById('autoClickCost').textContent = autoClickCost;
        document.getElementById('autoClickBtn').disabled = true;

        document.getElementById('autoClickerCount').textContent = autoClickers;

        if (autoClickIntervalId) {
          clearInterval(autoClickIntervalId);
        }
        autoClickIntervalId = setInterval(autoClick, 1000); 
      }
    });

    document.getElementById('stopAutoClickBtn').addEventListener('click', function() {
      clearInterval(autoClickIntervalId);
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
        donutCount = 0;
        autoClickers = 0;
        autoClickCost = 100;
        clearInterval(autoClickIntervalId);
  
        document.getElementById('donutCount').textContent = donutCount;
        document.getElementById('autoClickerCount').textContent = autoClickers;
        document.getElementById('autoClickCost').textContent = autoClickCost;
        document.getElementById('autoClickBtn').disabled = true;
      });

