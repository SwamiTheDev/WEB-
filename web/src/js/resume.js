    
    
    var progress = document.querySelector('progress');
    var value = 0;
     setInterval(function() {
    value += 10;
    if (value > 100) {
      value = 0;
    }
    progress.value = value;
  }, 1000);

