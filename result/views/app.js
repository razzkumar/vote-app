// const socket = io.connect({ transports: ['polling'] });
const socket = io()

const bg1 = document.getElementById('background-stats-1');
const bg2 = document.getElementById('background-stats-2');

(function() {

  const scope = {}

  scope.aPercent = 50;
  scope.bPercent = 50;

  const updateScores = function() {
    socket.on('scores', function(json) {
      data = JSON.parse(json);
      const a = parseInt(data.a || 0);
      const b = parseInt(data.b || 0);

      const percentages = getPercentages(a, b);

      bg1.style.width = percentages.a + "%";
      bg2.style.width = percentages.b + "%";

      scope.aPercent = percentages.a;
      scope.bPercent = percentages.b;
      scope.total = a + b;

      const catP = document.getElementById("catP")
      const dogP = document.getElementById("dogP")

      catP.innerText = scope.aPercent;
      dogP.innerText = scope.bPercent;

    });
  };

  const init = function() {
    document.body.style.opacity = 1;
    updateScores();
  };
  socket.on('message', function(data) {
    init();
  });
})();

function getPercentages(a, b) {
  const result = {};

  if (a + b > 0) {
    result.a = Math.round(a / (a + b) * 100);
    result.b = 100 - result.a;
  } else {
    result.a = result.b = 50;
  }

  return result;
}
