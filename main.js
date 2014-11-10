(function() {
  var vibrateButton = document.querySelector('#vibrate');
  
  vibrateButton.addEventListener('click', function() {
    if ('vibrate' in navigator) {
      navigator.vibrate(1000);
    } else {
      alert('something is wrong...');
    }
  });

})();